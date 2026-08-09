const { execFileSync } = require("node:child_process");
const { mkdirSync, readFileSync, writeFileSync } = require("node:fs");
const { dirname, join } = require("node:path");

const root = process.cwd();
const inputPath = join(root, "src", "input.css");
const outputPath = join(root, "src", "output.css");
const sourceFiles = [
  "src/styles/base.css",
  "src/styles/components.css",
  "src/styles/animations.css",
];

const css = sourceFiles
  .map((file) => readFileSync(join(root, file), "utf8").trim())
  .join("\n\n");

mkdirSync(dirname(inputPath), { recursive: true });
writeFileSync(inputPath, `${css}\n`);

execFileSync(
  process.execPath,
  [
    join(root, "node_modules", "tailwindcss", "lib", "cli.js"),
    "-i",
    inputPath,
    "-o",
    outputPath,
  ],
  { stdio: "inherit" },
);
