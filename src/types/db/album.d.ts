import { Album, Category, Image } from "@prisma/client";

type AlbumWithRelationsResponse =
  | (Album & {
      images: Image[];
    } & {
      category: Category | null;
    })
  | null;
type AlbumsResponse = Album[];

type AlbumResponse = Album | null;
