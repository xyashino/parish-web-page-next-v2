import { ApiRoute } from "@/types/enums";
import { apiCallWithToast } from "@/lib/utils";

export const createAdministratorApiCall = async (values: { email: string }) => {
  await apiCallWithToast({
    url: ApiRoute.BASE_ADMINISTRATORS,
    fetchOptions: {
      method: "POST",
      body: JSON.stringify(values),
    },
    msg: {
      success: "Pomyślnie dodano administratora.",
      error: "Nie udało się dodać administratora.",
      loading: "Trwa dodawanie administratora...",
    },
  });
};

export const deleteAdministratorApiCall = async (id: string) => {
  await apiCallWithToast({
    url: `${ApiRoute.BASE_ADMINISTRATORS}/${id}`,
    fetchOptions: {
      method: "DELETE",
    },
    msg: {
      success: "Pomyślnie usunięto administratora.",
      error: "Nie udało się usunąć administratora.",
      loading: "Trwa usuwanie administratora...",
    },
  });
};
