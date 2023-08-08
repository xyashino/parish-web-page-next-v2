import { ApiToastsCrudMessages, ToastMessages } from "@/types/toast";

export const DEFAULT_API_TOAST_MESSAGES: ToastMessages = {
  loading: "Wczytywanie...",
  success: "Sukces!",
  error: "Coś poszło nie tak!",
} as const;

export const DEFAULT_API_TOAST_CRUD_MESSAGES: ApiToastsCrudMessages = {
  delete: DEFAULT_API_TOAST_MESSAGES,
  create: DEFAULT_API_TOAST_MESSAGES,
  update: DEFAULT_API_TOAST_MESSAGES,
} as const;
