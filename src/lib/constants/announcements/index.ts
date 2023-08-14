import { AnnouncementsData } from "@/types/announcement-edit";
import { ApiToastsCrudMessages } from "@/types/toast";

export const ANNOUNCEMENTS_API_MESSAGES: ApiToastsCrudMessages = {
  delete: {
    loading: "Usuwanie ogłoszeń...",
    success: "Ogłoszenie zostało usunięte",
    error: "Nie udało się usunąć ogłoszenia",
  },
  update: {
    loading: "Zapisywanie zmian...",
    success: "Zmiany zostały zapisane",
    error: "Nie udało się zapisać zmian",
  },
  create: {
    loading: "Tworzenie ogłoszenia...",
    success: "Ogłoszenie zostało utworzone",
    error: "Nie udało się utworzyć ogłoszenia",
  },
} as const;

export const DEFAULT_ANNOUNCEMENT_DATA: AnnouncementsData = {
  status: "NONE",
  subtitle: "",
} as const;
