import { ApiRoute } from "@/types/enums";
import { apiCall, apiCallWithToast } from "@/lib/utils";
import { UPDATE_COVER_IMAGE_MESSAGES } from "@/config/constants/image";
import { CreateAlbum, ImageResponse } from "@/types/db/album";

export const getImageCoverPath = async (id: string) => {
  return (await apiCall<ImageResponse>(`${ApiRoute.BASE_IMAGES}/${id}`)).path;
};

export const updateCoverImage = async (albumId: string, coverId: string) => {
  return apiCallWithToast<ImageResponse>({
    url: `${ApiRoute.BASE_ALBUMS}/${albumId}`,
    fetchOptions: {
      method: "PUT",
      body: JSON.stringify({ coverId } as Partial<CreateAlbum>),
    },
    msg: UPDATE_COVER_IMAGE_MESSAGES,
  });
};

export const uploadImageApiCall = async (image: File, uuid: string) => {
  const formData = new FormData();
  formData.append(uuid, image);
  return await apiCall<ImageResponse>(
    ApiRoute.UPLOAD_IMAGE,
    {
      method: "POST",
      body: formData,
      headers: {},
    },
    true,
  );
};

export const deleteImageApiCall = async (id: string) => {
  return apiCallWithToast<ImageResponse>({
    url: `${ApiRoute.BASE_IMAGES}/${id}`,
    fetchOptions: {
      method: "DELETE",
    },
    msg: {
      success: "Zdjęcie zostało usunięte",
      error: "Błąd podczas usuwania zdjęcia",
      loading: "Usuwanie zdjęcia...",
    },
  });
};
