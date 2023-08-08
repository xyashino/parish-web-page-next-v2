import { apiCall, apiCallWithToast } from "@/lib/utils";
import { Album, Image } from "@prisma/client";
import { ApiRoute } from "@/types/enums/api-route.enum";

export const getImageCoverPath = async (id: string) => {
  return (await apiCall<Image>(`${ApiRoute.BASE_IMAGES}/${id}`)).path;
};

export const updateCoverImage = async (albumId: string, coverId: string) => {
  return apiCallWithToast<Image>({
    url: `${ApiRoute.BASE_ALBUMS}/${albumId}`,
    fetchOptions: {
      method: "PUT",
      body: JSON.stringify({ coverId } as Partial<Album>),
    },
    msg: {
      success: "Zaktualizowano okładkę albumu",
      error: "Nie udało się zaktualizować okładki albumu",
      loading: "Aktualizowanie okładki ...",
    },
  });
};
