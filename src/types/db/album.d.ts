import { albumTable, categoryTable, imageTable } from "@/db/schema";

type ImageResponse = typeof imageTable.$inferSelect;
type ImageListResponse = SelectImage[];

type CreateCategory = typeof categoryTable.$inferInsert;
type SelectCategory = typeof categoryTable.$inferSelect;

interface AlbumWithCover extends AlbumResponse {
  cover: ImageResponse | null | undefined;
}

type ActiveCategoriesResponse = (SelectCategory & {
  albums: AlbumWithCover[];
})[];

type CategoryResponse = SelectCategory;
type CategoriesResponse = SelectCategory[];

type CategoryWithAlbumsResponse = SelectCategory & {
  albums: AlbumWithCover[];
};

type CreateAlbum = typeof albumTable.$inferInsert;
type AlbumResponse = typeof albumTable.$inferSelect;
type AlbumListResponse = AlbumResponse[];

type AlbumsWithCategoryResponse = (AlbumResponse & {
  category: string | null;
  cover: string | null;
})[];

type AlbumWithRelationsResponse = AlbumResponse & {
  images: ImageListResponse;
  cover: ImageResponse;
  category: CategoryResponse;
};
