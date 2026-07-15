#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MODEL_INVOKED = new Set([
  "ux-flow",
  "ui-craft",
  "design-review",
  "copy-craft",
  "token-drift",
]);

const USER_INVOKED = new Set([
  "whiteboard-me",
  "whiteboard-flow",
  "whiteboard-ui",
  "ask-whiteboard",
  "setup-whiteboard",
  "update-canon",
]);

const WRAPPERS = new Set(["whiteboard-me", "whiteboard-flow", "whiteboard-ui"]);

function listFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(absolutePath));
    else files.push(absolutePath);
  }
  return files;
}

function parseValue(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function validateSkillDocument({ relativePath, content }) {
  const errors = [];
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) return [`${relativePath}: missing YAML frontmatter`];

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const field = line.match(/^([a-z0-9-]+):\s*(.*)$/);
    if (!field) {
      errors.push(`${relativePath}: invalid frontmatter line: ${line}`);
      continue;
    }
    fields[field[1]] = parseValue(field[2]);
  }

  const folderName = path.basename(path.dirname(relativePath));
  const name = fields.name;
  if (!name) errors.push(`${relativePath}: missing name`);
  else {
    if (name !== folderName) errors.push(`${relativePath}: name "${name}" does not match folder "${folderName}"`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) errors.push(`${relativePath}: name must be lowercase-hyphen`);
  }

  const description = fields.description;
  if (!description) errors.push(`${relativePath}: missing description`);
  else if (description.length >= 1536) errors.push(`${relativePath}: description must be under 1536 characters`);

  const category = MODEL_INVOKED.has(name) ? "model" : USER_INVOKED.has(name) ? "user" : undefined;
  if (!category) errors.push(`${relativePath}: skill is not classified in the repository invariants`);

  const invocationFlag = fields["disable-model-invocation"];
  if (category === "model" && invocationFlag !== undefined) {
    errors.push(`${relativePath}: model-invoked skills must omit disable-model-invocation`);
  }
  if (category === "user" && invocationFlag !== "true") {
    errors.push(`${relativePath}: user-invoked skills must set disable-model-invocation: true`);
  }

  if (WRAPPERS.has(name)) {
    const bodyLineCount = match.input.slice(match[0].length).split(/\r?\n/).filter((line) => line.trim()).length;
    if (bodyLineCount > 10) errors.push(`${relativePath}: wrapper body has ${bodyLineCount} non-empty lines; maximum is 10`);
  }

  return errors;
}

export function validateRepository(rootDirectory) {
  const errors = [];
  const skillsDirectory = path.join(rootDirectory, "skills", "design");
  const skillDirectories = fs.readdirSync(skillsDirectory, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  const skillNames = [];

  for (const directory of skillDirectories) {
    const name = directory.name;
    const relativePath = path.join("skills", "design", name, "SKILL.md");
    const absolutePath = path.join(rootDirectory, relativePath);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`${relativePath}: missing SKILL.md`);
      continue;
    }
    skillNames.push(name);
    errors.push(...validateSkillDocument({ relativePath, content: fs.readFileSync(absolutePath, "utf8") }));
  }

  const referenceFiles = listFiles(skillsDirectory).filter((file) => file.includes(`${path.sep}references${path.sep}`) && file.endsWith(".md"));
  const stamps = new Set();
  for (const absolutePath of referenceFiles) {
    const relativePath = path.relative(rootDirectory, absolutePath);
    const lines = fs.readFileSync(absolutePath, "utf8").split(/\r?\n/);
    const stamp = lines[0]?.match(/^> canon-version: (\d{4}-\d{2})$/)?.[1];
    if (!stamp) errors.push(`${relativePath}: first line must be > canon-version: YYYY-MM`);
    else stamps.add(stamp);
    if (!lines[1]?.startsWith("> ") || !lines[1].slice(2).trim()) errors.push(`${relativePath}: second line must describe the reference purpose`);
  }
  if (stamps.size > 1) errors.push(`reference files have inconsistent canon versions: ${[...stamps].join(", ")}`);

  const sourcesPath = path.join(rootDirectory, "skills", "design", "update-canon", "references", "sources.md");
  const sources = fs.readFileSync(sourcesPath, "utf8");
  const feedCells = sources
    .split(/\r?\n/)
    .filter((line) => line.startsWith("|") && !line.startsWith("|---"))
    .map((line) => line.split("|").at(-2)?.trim() ?? "")
    .join("\n");
  for (const absolutePath of referenceFiles) {
    const basename = path.basename(absolutePath);
    if (!feedCells.includes(basename)) errors.push(`sources.md: missing Feeds mapping for ${basename}`);
  }

  const readme = fs.readFileSync(path.join(rootDirectory, "README.md"), "utf8");
  for (const name of skillNames) {
    const link = `./skills/design/${name}/SKILL.md`;
    if (!readme.includes(link)) errors.push(`README.md: missing catalog link for ${name}`);
  }
  const router = fs.readFileSync(path.join(rootDirectory, "skills", "design", "ask-whiteboard", "SKILL.md"), "utf8");
  for (const name of USER_INVOKED) {
    if (name !== "ask-whiteboard" && !router.includes(`\`${name}\``)) errors.push(`ask-whiteboard: missing route for ${name}`);
  }

  const packageJson = JSON.parse(fs.readFileSync(path.join(rootDirectory, "package.json"), "utf8"));
  if (!/^pnpm@\d+\.\d+\.\d+$/.test(packageJson.packageManager ?? "")) errors.push("package.json: packageManager must pin pnpm");
  if (!fs.existsSync(path.join(rootDirectory, "pnpm-lock.yaml"))) errors.push("pnpm-lock.yaml: missing canonical lockfile");
  if (fs.existsSync(path.join(rootDirectory, "package-lock.json"))) errors.push("package-lock.json: remove competing npm lockfile; pnpm is canonical");
  for (const scriptName of ["validate", "test", "package:check"]) {
    if (!packageJson.scripts?.[scriptName]) errors.push(`package.json: missing ${scriptName} script`);
  }
  const changelog = fs.readFileSync(path.join(rootDirectory, "CHANGELOG.md"), "utf8");
  if (!changelog.includes(`## ${packageJson.version}`)) errors.push(`CHANGELOG.md: missing current version ${packageJson.version}`);

  return errors;
}

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = validateRepository(rootDirectory);
  if (errors.length) {
    console.error(errors.map((error) => `✗ ${error}`).join("\n"));
    process.exitCode = 1;
  } else {
    const count = fs.readdirSync(path.join(rootDirectory, "skills", "design"), { withFileTypes: true }).filter((entry) => entry.isDirectory()).length;
    const references = listFiles(path.join(rootDirectory, "skills", "design")).filter((file) => file.includes(`${path.sep}references${path.sep}`) && file.endsWith(".md")).length;
    console.log(`Validated ${count} skills and ${references} canon references.`);
  }
}
