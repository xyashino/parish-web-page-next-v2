type OptionalID<T extends { id: string }> = Omit<T, "id"> & { id?: string };

type ParamsWithUUID = { params: { uuid: string } };

type ApiMethod = "POST" | "PUT" | "DELETE" | "GET" | "PATCH";

type DateToString<T> = {
  [K in keyof T]: T[K] extends Date | null ? string | null : T[K];
};

interface ErrorResponse {
  error: string;
}

type ExcludeNull<T> = Exclude<T, null>;

type BaseResponse<T extends Omit<Record<string, any>, "error">> =
  | T
  | ErrorResponse;
type ExtractBaseResponse<T> = T extends BaseResponse<infer U> ? U : never;
