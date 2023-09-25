import {
  OneIntention,
  WeekIntentionsStoreData,
} from "@/types/week-intentions-store";

export const WEEK_INTENTIONS_STORE_DEFAULT: WeekIntentionsStoreData = {
  weekIntentions: {
    status: "NONE",
    startWeek: null,
    endWeek: null,
  },
  activeDay: "0",
  dayIntentions: new Map([
    [
      "0",
      {
        day: "MONDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "1",
      {
        day: "TUESDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "2",
      {
        day: "WEDNESDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "3",
      {
        day: "THURSDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "4",
      {
        day: "FRIDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "5",
      {
        day: "SATURDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "6",
      {
        day: "SUNDAY",
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
  ]),
} as const;

export const WEEK_INTENTIONS_API_MESSAGES = {
  delete: {
    success: "Intencje zostały usunięte",
    error: "Nie udało się usunąć intencji",
    loading: "Trwa usuwanie intencji...",
  },
  create: {
    success: "Intencje zostały dodane",
    error: "Nie udało się dodać intencji",
    loading: "Trwa dodawanie intencji...",
  },
  update: {
    success: "Intencje zostały zaktualizowane",
    error: "Nie udało się zaktualizować intencji",
    loading: "Trwa aktualizowanie intencji...",
  },
} as const;
