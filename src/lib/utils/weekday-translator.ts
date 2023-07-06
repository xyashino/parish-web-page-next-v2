import { Weekday } from "@prisma/client";
export const weekdayTranslator: Map<Weekday, string> = new Map([
  [Weekday.MONDAY, "poniedziałek"],
  [Weekday.FRIDAY, "piątek"],
  [Weekday.SATURDAY, "sobota"],
  [Weekday.SUNDAY, "niedziela"],
  [Weekday.THURSDAY, "czwartek"],
  [Weekday.TUESDAY, "wtorek"],
  [Weekday.WEDNESDAY, "środa"],
]);
