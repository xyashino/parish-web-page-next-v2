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
};
