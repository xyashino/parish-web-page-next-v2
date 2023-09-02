import { Album, Category, Image } from "@prisma/client";

type CategoriesCover = Pick<Image, "path" | "id"> | null;

type CategoriesAlbum = Pick<Album, "subtitle" | "title" | "id"> & {
  cover: CategoriesCover;
};

type CategoryResponse = Category | null;

type NotNullCategoryResponse = Category;

type CategoriesResponse = Category[];

type CategoryWithAlbumsResponse = Pick<Category, "id" | "name"> & {
  albums: CategoriesAlbum[];
};
