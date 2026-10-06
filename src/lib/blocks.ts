import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { codeToHtml } from "shiki";

import { categories } from "@/blocks/categories";
import { blocks } from "@/blocks/registry.generated";

export { blocks, categories };

export function blocksIn(category: string) {
  return blocks.filter((b) => b.category === category);
}

export function categoriesWithCounts() {
  return categories
    .map((c) => ({ ...c, count: blocksIn(c.id).length }))
    .filter((c) => c.count > 0);
}

/** Source code of a block, plus syntax-highlighted HTML (rendered at build time). */
export async function blockSource(file: string) {
  const code = readFileSync(join(process.cwd(), file), "utf8");
  const html = await codeToHtml(code, {
    lang: "tsx",
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
  return { code, html };
}
