import { Day } from "@/types/db/enums";

export const weekdayTranslator: Map<Day, string> = new Map([
  ["MONDAY", "poniedziałek"],
  ["TUESDAY", "wtorek"],
  ["WEDNESDAY", "środa"],
  ["THURSDAY", "czwartek"],
  ["FRIDAY", "piątek"],
  ["SATURDAY", "sobota"],
  ["SUNDAY", "niedziela"],
]);
