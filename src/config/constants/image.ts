import { ToastMessages } from "@/types/toast";

export const UPDATE_COVER_IMAGE_MESSAGES: ToastMessages = {
  success: "Zaktualizowano okładkę albumu",
  error: "Nie udało się zaktualizować okładki albumu",
  loading: "Aktualizowanie okładki ...",
} as const;
