type OptionalID<T extends { id: string }> = Omit<T, "id"> & { id?: string };

type ParamsWithUUID = { params: { uuid: string } };

type ApiMethod = "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
