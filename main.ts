import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Warmth first, then surprise: a remembered order, a free coffee, and the pigeons.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "The barista remembered my order, then handed me a second coffee 'for the guy who always says good morning to the pigeons.'";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
