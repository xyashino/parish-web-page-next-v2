type OptionalID<T extends { id: string }> = Omit<T, "id"> & { id?: string };

type ParamsWithUUID = { params: { uuid: string } };

type ApiMethod = "POST" | "PUT" | "DELETE" | "GET" | "PATCH";

type NullToUndefined<T> = {
  [P in keyof T]: T[P] extends null ? undefined : T[P];
};
