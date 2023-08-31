import { notFound } from "next/navigation";
import { ArticleWrapper } from "@/layouts/ArticleWrapper";
import { getArticleByFileName, getArticleNames } from "@/lib/utils";

const ARTICLE_PATH = "/src/articles" as const;

type ParamsWithName = {
  params: {
    name: string;
  };
};

export const generateStaticParams = async () => getArticleNames(ARTICLE_PATH);

export default async function ArticlePage({
  params: { name },
}: ParamsWithName) {
  const article = await getArticleByFileName<BaseArticleMetadata>(
    name,
    ARTICLE_PATH,
  );

  if (!article) return notFound();

  const { content, data } = article;

  return <ArticleWrapper content={content} {...data} />;
}
