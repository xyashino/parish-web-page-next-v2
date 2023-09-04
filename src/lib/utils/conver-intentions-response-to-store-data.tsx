import {
  DayIntentions,
  WeekIntentionsStoreData,
} from "@/types/week-intentions-store";
import {
  WeekIntentionsDay,
  WeekIntentionsWithRelationsResponse,
} from "@/types/db/week-intentions";
import { Status } from "@prisma/client";

type NotNullableResponse = Exclude<WeekIntentionsWithRelationsResponse, null>;

const createDayIntentionMapEntry = ({
  id,
  dateOfDay,
  ...rest
}: WeekIntentionsDay): [string, DayIntentions] => [
  id,
  {
    dateOfDay: dateOfDay ? new Date(dateOfDay) : null,
    id,
    ...rest,
  },
];

export const convertIntentionsResponseToStoreData = ({
  status = Status.NONE,
  endWeek,
  startWeek,
  days,
  id,
}: NotNullableResponse): WeekIntentionsStoreData => {
  const weekIntentions = {
    status,
    startWeek: startWeek ? new Date(startWeek) : null,
    endWeek: endWeek ? new Date(endWeek) : null,
    id,
  };

  const dayIntentionsMapData = days.map(createDayIntentionMapEntry);
  const dayIntentions = new Map(dayIntentionsMapData);

  return {
    weekIntentions,
    activeDay: days[0]?.id || "0",
    dayIntentions,
  };
};
