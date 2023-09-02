export enum ApiRoute {
  UPLOAD_IMAGE = "/api/upload/image",
  BASE_CATEGORIES = "/api/categories",
  BASE_ALBUMS = "/api/albums",
  BASE_ANNOUNCEMENTS = "/api/announcements",
  BASE_WEEK_INTENTIONS = "/api/intentions",
  BASE_IMAGES = "/api/images",
  BASE_ADMINISTRATORS = "/api/administrators",

  ACTIVE_ANNOUNCEMENT = "/api/announcements?status=ACTIVE",
  ACTIVE_WEEK_INTENTION = "/api/intentions?status=ACTIVE",
}
