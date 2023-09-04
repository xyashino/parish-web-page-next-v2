import { ToastMessages } from "@/types/toast";
import toast from "react-hot-toast";
import { DEFAULT_API_TOAST_MESSAGES } from "@/lib/constants/common";

interface FetchDataWithToastOptions<T> {
  url: string;
  fetchOptions?: RequestInit;
  overrideOptions?: boolean;
  msg?: ToastMessages;
}

const defaultConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiCall = async <T>(
  url: string,
  config?: RequestInit,
  override = true,
): Promise<T> => {
  const result = await fetch(
    process.env.NEXT_PUBLIC_APP_URL + url,
    override ? { ...defaultConfig, ...config } : config,
  );
  const parsedResult = await result.json();
  if (result.status !== 200) {
    throw new Error(parsedResult.message || "Something went wrong!");
  }
  return parsedResult;
};

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
