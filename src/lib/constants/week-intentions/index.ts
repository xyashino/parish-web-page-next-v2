import {
  OneIntention,
  WeekIntentionsStoreData,
} from "@/types/week-intentions-store";
import { Weekday } from "@prisma/client";

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
        day: Weekday.MONDAY,
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "1",
      {
        day: Weekday.TUESDAY,
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "2",
      {
        day: Weekday.WEDNESDAY,
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "3",
      {
        day: Weekday.THURSDAY,
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "4",
      {
        day: Weekday.FRIDAY,
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "5",
      {
        day: Weekday.SATURDAY,
        dateOfDay: null,
        intentions: [] as OneIntention[],
      },
    ],
    [
      "6",
      {
        day: Weekday.SUNDAY,
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
