import { DEFAULT_API_TOAST_MESSAGES } from "@/lib/constants/common";
import { ToastMessages } from "@/types/toast";
import { apiCall } from "@/lib/utils/api-call";
import toast from "react-hot-toast";

interface FetchDataWithToastOptions<T> {
  url: string;
  fetchOptions?: RequestInit;
  overrideOptions?: boolean;
  msg?: ToastMessages;
}

export const apiCallWithToast = async <T>({
  url,
  fetchOptions,
  overrideOptions,
  msg = DEFAULT_API_TOAST_MESSAGES,
}: FetchDataWithToastOptions<T>) => {
  const resultPromise = apiCall<T>(url, fetchOptions, overrideOptions);
  toast.promise(resultPromise, msg);
  return await resultPromise;
};
