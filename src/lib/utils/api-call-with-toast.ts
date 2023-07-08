import { apiCall } from "@/lib/utils/api-call";
import toast, { Renderable, ValueOrFunction } from "react-hot-toast";

interface FetchDataWithToastOptions<T> {
  url: string;
  fetchOptions?: RequestInit;
  overrideOptions?: boolean;
  msg?: {
    loading: Renderable;
    success: ValueOrFunction<Renderable, T>;
    error: ValueOrFunction<Renderable, any>;
  };
}

const DEFAULT_MSG = {
  loading: "Wczytywanie...",
  success: "Sukces!",
  error: "Upps... Coś poszło nie tak :/",
};

export const apiCallWithToast = async <T>({
  url,
  fetchOptions,
  overrideOptions,
  msg = DEFAULT_MSG,
}: FetchDataWithToastOptions<T>) => {
  const resultPromise = apiCall<T>(url, fetchOptions, overrideOptions);
  toast.promise(resultPromise, msg);
  return await resultPromise;
};
