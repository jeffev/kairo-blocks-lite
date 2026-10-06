import type { ComponentType } from "react";

export type BlockMeta = {
  /** Short display name, e.g. "Centered hero with screenshot". */
  name: string;
  description: string;
  /** Uses client-side interactivity ("use client"). */
  interactive?: boolean;
};

export type BlockEntry = {
  id: string;
  category: string;
  file: string;
  meta: BlockMeta;
  Component: ComponentType;
};
