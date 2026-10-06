// Next.js 16 static export writes segment-prefetch payloads as nested folders
// (`orders/__next.!KGFwcCk/orders/__PAGE__.txt`) while the client router requests
// flat file names (`orders/__next.!KGFwcCk.orders.__PAGE__.txt`). On plain static
// hosts that mismatch turns every link prefetch into a 404. This post-build step
// adds a flat copy of each payload next to the nested one.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
let copied = 0;

function walk(dir, visit) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, visit);
    else visit(path);
  }
}

function flatten(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      walk(path, (file) => {
        const flat = `${name}.${relative(path, file).split(sep).join(".")}`;
        copyFileSync(file, join(dir, flat));
        copied += 1;
      });
    } else {
      flatten(path);
    }
  }
}

flatten(OUT);
console.log(`flatten-prefetch: wrote ${copied} prefetch file(s)`);
