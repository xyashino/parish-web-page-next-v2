import { create } from "zustand";
import { WeekIntentionsStore } from "@/types/week-intentions-store";
import { Status, Weekday } from "@prisma/client";
import { WEEK_INTENTIONS_STORE_DEFAULT } from "@/lib/constants/week-intentions";

export const useWeekIntentionsStore = create<WeekIntentionsStore>(
  (set, get) => ({
    ...WEEK_INTENTIONS_STORE_DEFAULT,
    updateActiveDay: (id) => {
      set({ activeDay: id });
    },
    updateAll: ({ dayIntentions, weekIntentions, activeDay }) => {
      set({
        dayIntentions: new Map(dayIntentions),
        weekIntentions: { ...weekIntentions },
        activeDay,
      });
    },
    clearAll: () => {
      const { dayIntentions, weekIntentions } = get();
      weekIntentions.startWeek = null;
      weekIntentions.endWeek = null;
      weekIntentions.status = Status.NONE;
      const getEnumDays = Object.values(Weekday);

      getEnumDays.forEach((day, i) => {
        const foundDay = dayIntentions.get(i.toString());
        if (!foundDay) return;
        foundDay.dateOfDay = null;
        foundDay.intentions = [];
      });

      set({
        weekIntentions: { ...weekIntentions },
        dayIntentions: new Map(dayIntentions),
      });
    },

    clearDay: () => {
      const { activeDay, dayIntentions } = get();
      const foundDay = dayIntentions.get(activeDay);
      if (!foundDay) return;
      foundDay.dateOfDay = null;
      foundDay.intentions = [];
      set({ dayIntentions: new Map(dayIntentions) });
    },

    deleteIntention: (id) => {
      const { activeDay, dayIntentions } = get();
      const foundDay = dayIntentions.get(activeDay);
      if (!foundDay) return;
      foundDay.intentions = foundDay.intentions.filter(
        (intention) => intention.id !== id,
      );
      set({ dayIntentions: new Map(dayIntentions) });
    },

    updateDay: (dateOfDay) => {
      const { activeDay, dayIntentions } = get();
      const foundDay = dayIntentions.get(activeDay);
      if (!foundDay) return;
      foundDay.dateOfDay = dateOfDay;
      set({ dayIntentions });
    },

    createIntention: (intention) => {
      const { activeDay, dayIntentions } = get();
      const foundDay = dayIntentions.get(activeDay);
      if (!foundDay) return;
      foundDay.intentions.push({ ...intention });
      set({ dayIntentions: new Map(dayIntentions) });
    },

    updateWeek: (date: Date) => {
      const getEnumDays = Object.values(Weekday);
      const { dayIntentions, weekIntentions } = get();
      weekIntentions.startWeek = new Date(date);
      weekIntentions.endWeek = new Date(
        new Date(date).setDate(date.getDate() + 6),
      );
      getEnumDays.forEach((day, i) => {
        const weekStart = new Date(date);
        const foundDay = dayIntentions.get(i.toString());
        if (!foundDay) return;
        foundDay.dateOfDay = new Date(
          weekStart.setDate(weekStart.getDate() + i),
        );
      });

      set({
        weekIntentions: { ...weekIntentions },
        dayIntentions: new Map(dayIntentions),
      });
    },

    updateStatus: (status) => {
      const { weekIntentions } = get();
      set({ weekIntentions: { ...weekIntentions, status } });
    },
  }),
);
