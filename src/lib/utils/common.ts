import { WeekIntentionsDay } from "@/types/db/week-intentions";
import { DAY } from "@/config/constants/db";

export const getLengthByEnumStatus = <T extends { status: any }>(
  values: T[],
  status: any,
) => values.filter((values) => values.status === status).length;

export const getLengthByShow = <T extends { show: boolean }>(values: T[]) => {
  const trueValues = values.filter((values) => values.show).length;
  const falseValues = values.length - trueValues;
  return { trueValues, falseValues };
};

export const getErrorMessage = (error: unknown) => {
  let errorMessage = "Unknown error";
  if (error instanceof Error) errorMessage = error.message;
  return errorMessage;
};

export const getActiveDayID = (days: WeekIntentionsDay[]) => {
  const getCurrentDay = new Date().getDay() - 1;
  const activeDay = DAY.at(getCurrentDay);
  return days.find((day) => day.day === activeDay)?.id ?? days[0].id;
};
