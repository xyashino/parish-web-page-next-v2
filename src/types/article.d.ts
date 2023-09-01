interface ImageMetadata {
  bgcSrc: string;
  bgcAlt: string;
}

type SubArticleMetaData = {
  title: string;
  order: number;
} & (ImageMetadata | {});

type BaseArticleMetadata = {
  title?: string;
  subtitle?: string;
} & (ImageMetadata | {});
