// The Funniest Toaster Error — make.fun entry.
// Writes one deadpan toaster error line to MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

// The line, exactly as the toaster would show it.
const line = "ERROR 404: Bread not found. Please insert bread and try again.";

function fail(message: string): never {
  throw new Error(message);
}

// The gate wants 1–120 characters of real text, one line, no padding.
if (line.length < 1 || line.length > MAX_CHARS) {
  fail(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
}
if (line !== line.trim()) {
  fail("entry must not start or end with whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  fail("entry must be a single line");
}
for (const ch of line) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    fail("entry must not contain control characters");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, "entry.txt");
const bytes = Buffer.from(line, "utf8");
writeFileSync(target, bytes);

// Read the file back as raw bytes and prove it is exactly our line,
// with no trailing newline smuggled in.
const written = readFileSync(target);
if (!written.equals(bytes)) {
  fail("read-back bytes differ from the entry line");
}
if (written.length > 0 && written[written.length - 1] === 0x0a) {
  fail("entry.txt must not end with a newline");
}

console.log(`wrote ${written.length} bytes to ${target}`);
