import {
  Day,
  Intention,
  Status,
  Weekday,
  WeekIntentions,
} from "@prisma/client";

type OneIntention = Omit<Intention, "dayId"> & {
  dayId?: string | null;
};

type DayIntentions = OptionalID<Omit<Day, "weekId" | "day">> & {
  day: Weekday;
  weekId?: string | null;
  intentions: OneIntention[];
};

interface WeekIntentionsStoreData {
  weekIntentions: OptionalID<WeekIntentions>;
  activeDay: string;
  dayIntentions: Map<string, DayIntentions>;
}

interface WeekIntentionsStoreActions<> {
  clearAll: () => void;
  clearDay: () => void;
  deleteIntention: (id: string) => void;
  updateDay: (dateOfDay: Date) => void;
  createIntention: (intention: OneIntention) => void;
  updateWeek: (date: Date) => void;
  updateStatus: (status: Status) => void;
  updateAll: (data: WeekIntentionsStoreData) => void;
  updateActiveDay: (id: string) => void;
}

type WeekIntentionsStore = WeekIntentionsStoreData & WeekIntentionsStoreActions;
