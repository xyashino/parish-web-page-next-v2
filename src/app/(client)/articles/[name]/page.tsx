import { join } from "node:path";
import { notFound } from "next/navigation";
import { getDirNames } from "@/lib/utils/mdx/get-dir-names";
import { getArticlesFromDir } from "@/lib/utils/mdx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticleWrapper } from "@/layouts/ArticleWrapper";

const ARTICLE_PATH = "/src/articles" as const;

type ParamsWithName = {
  params: {
    name: string;
  };
};

export const generateStaticParams = async () =>
  (await getDirNames(ARTICLE_PATH)).map((name) => ({ name }));

export default async function ArticlePage({
  params: { name },
}: ParamsWithName) {
  const dirNames = await getDirNames(ARTICLE_PATH);
  if (!dirNames.includes(name)) return notFound();

  try {
    const dirPath = join(ARTICLE_PATH, name);
    const articlesArr = await getArticlesFromDir(dirPath);
    return (
      <div className="w-full">
        <Tabs defaultValue={articlesArr[0].fileName}>
          <TabsList className="flex h-auto w-full flex-wrap items-center justify-center">
            {articlesArr.map(({ fileName, data }) => (
              <TabsTrigger
                key={fileName}
                value={fileName}
                className="text-lg grow capitalize"
              >
                {data.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {articlesArr.map(({ fileName, content, data }) => (
            <TabsContent key={fileName} value={fileName}>
              <ArticleWrapper content={content} {...data} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  } catch (e) {
    return notFound();
  }
}
