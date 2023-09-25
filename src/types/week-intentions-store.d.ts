import {
  SelectDay,
  SelectIntention,
  SelectWeekIntentions,
} from "@/types/db/week-intentions";
import { Day, Status } from "@/types/db/enums";

type OneIntention = Omit<SelectIntention, "dayId"> & {
  dayId?: string | null;
};

type DayIntentions = OptionalID<Omit<SelectDay, "weekId" | "day">> & {
  day: Day;
  weekId?: string | null;
  intentions: OneIntention[];
};

interface WeekIntentionsStoreData {
  weekIntentions: OptionalID<SelectWeekIntentions>;
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
