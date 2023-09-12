import { MDXRemote } from "next-mdx-remote/rsc";
import { ImageTextSection } from "@/components/ImageTextSection";

type Props = BaseArticleMetadata & {
  content: string;
};
export const ArticleWrapper = ({ content, ...rest }: Props) => {
  return (
    <div className="animate-fadeIn">
      {"bgcSrc" in rest && rest.bgcSrc && rest.bgcAlt && (
        <ImageTextSection src={rest.bgcSrc} alt={rest.bgcAlt} {...rest} />
      )}
      <div className="w-full bg-white p-12">
        <article className="prose lg:mx-auto mx-2 max-w-none lg:w-5/6 w-full ">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
};
