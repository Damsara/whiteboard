import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateRepository, validateSkillDocument } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readSkill = (name) => fs.readFileSync(path.join(root, "skills", "design", name, "SKILL.md"), "utf8");
const flowCanon = fs.readFileSync(path.join(root, "skills", "design", "ux-flow", "references", "flow-canon.md"), "utf8");
const uiCanon = fs.readFileSync(path.join(root, "skills", "design", "ui-craft", "references", "ui-canon.md"), "utf8");
const principleMap = fs.readFileSync(path.join(root, "skills", "design", "ux-flow", "references", "principle-map.md"), "utf8");

const lawsSection = flowCanon.match(/## Laws of UX — behavioral & cognitive \(Yablonski\)([\s\S]*?)\n## Emotional layers/)[1];
const gestaltSection = uiCanon.match(/## Gestalt laws \(Yablonski 11–15\)([\s\S]*?)\n## Rams/)[1];
const canonLaws = [
  ...[...lawsSection.matchAll(/^- \*\*(.+?)\*\* —/gm)].map((match) => match[1]),
  ...[...gestaltSection.matchAll(/^- \*\*(.+?)\*\* —/gm)].map((match) => `Law of ${match[1]}`),
];
const normalizeLaw = (law) => law.replaceAll("’", "'");
const matrixLaws = [...principleMap.matchAll(/^\| ([^|]+) \|/gm)].map((match) => match[1]).filter((law) => law !== "Principle");

test("the repository satisfies its skill and release contracts", () => {
  assert.deepEqual(validateRepository(root), []);
});

test("invalid skill frontmatter is rejected", () => {
  const malformedErrors = validateSkillDocument({
    relativePath: "skills/design/ux-flow/SKILL.md",
    content: "---\nname: Wrong Name\ndescription: short\ndisable-model-invocation: true\n---\n",
  });
  assert.match(malformedErrors.join("\n"), /does not match folder/);
  assert.match(malformedErrors.join("\n"), /lowercase-hyphen/);

  const invocationErrors = validateSkillDocument({
    relativePath: "skills/design/ux-flow/SKILL.md",
    content: "---\nname: ux-flow\ndescription: short\ndisable-model-invocation: true\n---\n",
  });
  assert.match(invocationErrors.join("\n"), /must omit disable-model-invocation/);
});

test("kickoff wrappers preserve their handoff order and the router covers the catalog", () => {
  const fullKickoff = readSkill("whiteboard-me");
  assert.ok(fullKickoff.indexOf("ux-flow") < fullKickoff.indexOf("ui-craft"));
  assert.match(readSkill("whiteboard-flow"), /Run a `ux-flow` session/);
  assert.match(readSkill("whiteboard-ui"), /Run a `ui-craft` session/);

  const router = readSkill("ask-whiteboard");
  for (const name of ["whiteboard-me", "whiteboard-flow", "whiteboard-ui", "design-review", "copy-craft", "token-drift", "setup-whiteboard", "update-canon"]) {
    assert.match(router, new RegExp(`\\b${name.replaceAll("-", "\\-")}\\b`));
  }
});

test("the principle matrix covers all 30 Laws of UX and every discipline reads it", () => {
  assert.equal(canonLaws.length, 30);
  assert.deepEqual(matrixLaws.map(normalizeLaw).sort(), canonLaws.map(normalizeLaw).sort());
  for (const name of ["ux-flow", "ui-craft", "design-review", "copy-craft", "token-drift"]) {
    assert.match(readSkill(name), /principle-map\.md/);
  }
});
