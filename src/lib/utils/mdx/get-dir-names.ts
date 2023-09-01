"use server";
import { join } from "path";
import { readdir } from "node:fs/promises";

export const getDirNames = async (dirPath: string): Promise<string[]> => {
  const fullDirPath = join(process.cwd(), dirPath);
  return (await readdir(fullDirPath)).filter((file) => !file.endsWith(".mdx"));
};
