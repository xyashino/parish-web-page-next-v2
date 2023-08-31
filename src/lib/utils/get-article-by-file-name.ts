"use server";
import path from "path";
import { readFile } from "node:fs/promises";
import matter from "gray-matter";

export interface ArticleResult<T> {
  fileName: string;
  content: string;
  data: T;
}

export const getArticleByFileName = async <T>(
  fileName: string,
  dirPath: string,
): Promise<ArticleResult<T> | null> => {
  const fullFilePath = path.join(process.cwd(), dirPath, `${fileName}.mdx`);
  try {
    const fileContent = await readFile(fullFilePath, "utf8");
    const { content, data } = matter(fileContent);
    return {
      fileName,
      data,
      content,
    } as ArticleResult<T>;
  } catch (e) {
    return null;
  }
};
