import { Album, Category, Image } from "@prisma/client";

type CategoriesCover = Pick<Image, "path" | "id"> | null;

type CategoriesAlbum = Pick<Album, "subtitle" | "title" | "id"> & {
  cover: CategoriesCover;
};

type RelationCategoriesResponse = Pick<Category, "name" | "id"> & {
  albums: CategoriesAlbum[];
};
