import {
  DayIntentions,
  WeekIntentionsStoreData,
} from "@/types/week-intentions-store";
import {
  WeekIntentionsDay,
  WeekIntentionsWithRelationsResponse,
} from "@/types/db/week-intentions";

const createDayIntentionMapEntry = ({
  id,
  dateOfDay,
  ...rest
}: WeekIntentionsDay): [string, DayIntentions] => [
  id,
  {
    dateOfDay: (dateOfDay && new Date(dateOfDay)) || null,
    ...rest,
  },
];

export const convertIntentionsResponseToStoreData = ({
  status = "NONE",
  endWeek,
  startWeek,
  days,
  id,
}: ExcludeNull<WeekIntentionsWithRelationsResponse>): WeekIntentionsStoreData => {
  const weekIntentions = {
    status,
    startWeek: startWeek ? new Date(startWeek) : null,
    endWeek: endWeek ? new Date(endWeek) : null,
    id,
  };

  const dayIntentionsMapData = days.map(createDayIntentionMapEntry);
  const dayIntentions: Map<string, DayIntentions> = new Map(
    dayIntentionsMapData,
  );

  return {
    weekIntentions,
    activeDay: days[0]?.id || "0",
    dayIntentions,
  };
};
