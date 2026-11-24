// Seventeen Syllables of Debugging — make.fun entry
// Writes one 5-7-5 haiku about debugging to <output dir>/entry.txt.
// Node 22, standard library only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Syllable counts, verified by hand:
//   "The stack trace points up"      — The(1) stack(1) trace(1) points(1) up(1) = 5
//   "each function blames its mother" — each(1) func-tion(2) blames(1) its(1) moth-er(2) = 7
//   "grandma wrote the bug"           — grand-ma(2) wrote(1) the(1) bug(1) = 5
// Total: 80 characters including newlines (limit 200).
const HAIKU = [
  "The stack trace points up",
  "each function blames its mother",
  "grandma wrote the bug",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
