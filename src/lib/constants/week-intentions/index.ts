import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";
import { Weekday } from "@prisma/client";

export const WEEK_INTENTIONS_STORE_DEFAULT: WeekIntentionsStoreData = {
  weekIntentions: {
    status: "NONE",
    startWeek: null,
    endWeek: null,
  },
  activeDay: "0",
  dayIntentions: new Map([
    ["0", { day: Weekday.MONDAY, dateOfDay: null, intentions: [] }],
    ["1", { day: Weekday.TUESDAY, dateOfDay: null, intentions: [] }],
    ["2", { day: Weekday.WEDNESDAY, dateOfDay: null, intentions: [] }],
    ["3", { day: Weekday.THURSDAY, dateOfDay: null, intentions: [] }],
    ["4", { day: Weekday.FRIDAY, dateOfDay: null, intentions: [] }],
    ["5", { day: Weekday.SATURDAY, dateOfDay: null, intentions: [] }],
    ["6", { day: Weekday.SUNDAY, dateOfDay: null, intentions: [] }],
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
