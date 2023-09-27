import { notFound } from "next/navigation";
import { ArticleWrapper } from "@/layouts/ArticleWrapper";
import { getArticleByFileName, getArticleNames } from "@/lib/utils/mdx";
import { ARTICLE_DIR_PATH } from "@/config/constants/md";

type ParamsWithName = {
  params: {
    name: string;
  };
};

export const generateStaticParams = async () =>
  getArticleNames(ARTICLE_DIR_PATH);

export default async function ArticlePage({
  params: { name },
}: ParamsWithName) {
  const article = await getArticleByFileName<BaseArticleMetadata>(
    name,
    ARTICLE_DIR_PATH,
  );

  if (!article) return notFound();

  const { content, data } = article;

  return <ArticleWrapper content={content} {...data} />;
}
