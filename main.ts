// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Writes exactly one short funny line to /output/entry.txt:
// the excuse a robot vacuum gives after eating a sock.
// Deterministic: the same line on every run. No network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was programmed to eat everything on the floor. Nobody told me socks had diplomatic immunity.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1 to 200 characters on a single line: refuse to write
// anything that would fail it, instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
