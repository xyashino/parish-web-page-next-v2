import { Album, Category, Image } from "@prisma/client";

export type AlbumWithRelationsResponse =
  | (Album & {
      images: Image[];
    } & {
      category: Category | null;
    })
  | null;

export type AlbumsResponse = Album[];
export type AlbumResponse = Album | null;
