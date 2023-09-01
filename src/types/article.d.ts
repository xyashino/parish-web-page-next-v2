interface ImageMetadata {
  bgcSrc: string;
  bgcAlt: string;
}

// type ArticleImageMetadata = {
//   title: string;
//   order: number;
// } & (ImageMetadata | {});

type BaseArticleMetadata = {
  title?: string;
  subtitle?: string;
} & (ImageMetadata | {});
