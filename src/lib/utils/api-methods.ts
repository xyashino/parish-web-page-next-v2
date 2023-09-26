import { ToastMessages } from "@/types/toast";
import toast from "react-hot-toast";
import { env } from "@/config/env/client";
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
    env.NEXT_PUBLIC_APP_URL + url,
    override ? { ...defaultConfig, ...config } : config,
  );

  if (!result.ok) {
    const parsedResult = (await result.json()) as ErrorResponse;
    throw new Error(parsedResult.error || "Something went wrong!");
  }
  return (await result.json()) as T;
};

export const apiCallWithToast = async <T extends Record<string, any>>({
  url,
  fetchOptions,
  overrideOptions,
  msg = DEFAULT_API_TOAST_MESSAGES,
}: FetchDataWithToastOptions<T>) => {
  const resultPromise = apiCall<T>(url, fetchOptions, overrideOptions);
  toast.promise(resultPromise, msg);
  return await resultPromise;
};
