"use server";
import { join } from "path";
import { readdir } from "node:fs/promises";

export const getArticleNames = async (
  dirPath: string,
): Promise<{ name: string }[]> => {
  const fullDirPath = join(process.cwd(), dirPath);
  const fileNames = (await readdir(fullDirPath)).filter((file) =>
    file.endsWith(".mdx"),
  );
  return fileNames.map((fileName) => ({
    name: fileName.replace(/\.mdx$/, ""),
  }));
};
