"use server";
import { getArticleNames } from "@/lib/utils/mdx/get-article-names";
import {
  ArticleResult,
  getArticleByFileName,
} from "@/lib/utils/mdx/get-article-by-file-name";

export const getArticlesFromDir = async (dirPath: string) => {
  const articleNames = (await getArticleNames(dirPath)).map(({ name }) => name);
  const result: ArticleResult<SubArticleMetaData>[] = [];
  for (const articleName of articleNames) {
    const article = await getArticleByFileName<SubArticleMetaData>(
      articleName,
      dirPath,
    );
    if (!article) continue;
    result.push(article);
  }
  return result.sort((a, b) => a.data.order - b.data.order);
};
