import { ESLint } from "eslint";
import * as fs from "node:fs";
import * as path from "node:path";
import { describe, test, expect } from "vitest";

const fixturesFolder = path.resolve(import.meta.dirname, "fixtures");
const cli = new ESLint({
  cwd: fixturesFolder,
  fix: false,
  cache: false,
  errorOnUnmatchedPattern: true,
});

const FIXTURES = fs
  .readdirSync(fixturesFolder, { withFileTypes: true })
  .filter((d) => d.isDirectory());

describe.each(FIXTURES)(`Fixture: $name`, (d) => {
  /** @param {string} f */
  const p = (f) => path.resolve(d.parentPath, d.name, f);

  test("valid", async () => {
    const lintResults = await cli.lintFiles(p("valid.js"));
    expect(lintResults).toHaveLength(1);
    expect(lintResults[0]).toHaveProperty("errorCount", 0);
    expect(lintResults[0]).toHaveProperty("warningCount", 0);

    const { filePath: _, ...snapshot } = lintResults[0];
    expect(snapshot).toMatchSnapshot();
  });

  test("invalid", async () => {
    const lintResults = await cli.lintFiles(p("invalid.js"));
    expect(lintResults).toHaveLength(1);
    expect(
      lintResults[0].errorCount + lintResults[0].warningCount,
    ).toBeGreaterThan(0);

    const { filePath: _, ...snapshot } = lintResults[0];
    expect(snapshot).toMatchSnapshot();
  });
});
