import { create } from "zustand";
import { WEEK_INTENTIONS_STORE_DEFAULT } from "@/lib/constants/week-intentions-store-defualt.constant";
import { WeekIntentionsStore } from "@/types/interfaces/week-intentions-store.interface";
import { Weekday } from "@prisma/client";

const copyObject = { ...WEEK_INTENTIONS_STORE_DEFAULT };

export const useWeekIntentionsStore = create<WeekIntentionsStore>(
  (set, get) => ({
    ...copyObject,
    updateActiveDay: (id) => {
      set({ activeDay: id });
    },
    updateAll: (data) => {
      set(data);
    },
    clearAll: () => {
      const { dayIntentions, weekIntentions } = get();
      weekIntentions.startWeek = null;
      weekIntentions.endWeek = null;
      weekIntentions.status = "NONE";
      const getEnumDays = Object.values(Weekday);

      getEnumDays.forEach((day, i) => {
        const foundDay = get().dayIntentions.get(i.toString());
        if (!foundDay) return;
        foundDay.dateOfDay = null;
        foundDay.intentions = [];
      });

      set({
        weekIntentions: { ...weekIntentions },
        dayIntentions,
      });
    },

    clearDay: () => {
      const { activeDay, dayIntentions } = get();
      const foundDay = dayIntentions.get(activeDay);
      if (!foundDay) return;
      foundDay.dateOfDay = null;
      foundDay.intentions = [];
      set({ dayIntentions });
    },

    deleteIntention: (id) => {
      const { activeDay, dayIntentions } = get();
      const foundDay = dayIntentions.get(activeDay);
      if (!foundDay) return;
      foundDay.intentions = foundDay.intentions.filter(
        (intention) => intention.id !== id
      );
      set({ dayIntentions });
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
      set({ dayIntentions });
    },

    updateWeek: (date: Date) => {
      const getEnumDays = Object.values(Weekday);
      const { dayIntentions, weekIntentions } = get();
      weekIntentions.startWeek = new Date(date);
      weekIntentions.endWeek = new Date(
        new Date(date).setDate(date.getDate() + 6)
      );
      getEnumDays.forEach((day, i) => {
        const weekStart = new Date(date);
        const foundDay = get().dayIntentions.get(i.toString());
        if (!foundDay) return;
        foundDay.dateOfDay = new Date(
          weekStart.setDate(weekStart.getDate() + i)
        );
      });

      set({
        weekIntentions: { ...weekIntentions },
        dayIntentions,
      });
    },

    updateStatus: (status) => {
      const { weekIntentions } = get();
      set({ weekIntentions: { ...weekIntentions, status } });
    },
  })
);
