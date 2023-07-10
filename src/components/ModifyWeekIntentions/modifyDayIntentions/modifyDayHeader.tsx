import React from "react";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { DayIntentions } from "@/types/interfaces/week-intentions-store.interface";
import { weekdayTranslator } from "@/lib/utils";

const ModifyDayHeader = ({
  day,
  dateOfDay,
}: Omit<DayIntentions, "intentions">) => {
  const { updateDay } = useWeekIntentionsStore();
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    updateDay(date);
  };

  return (
    <div className="flex w-full items-center justify-between rounded-t-2xl px-8 py-4 text-sm font-bold text-slate-50 bg-slate-950 md:text-xl">
      <h3 className="mr-2 uppercase">{weekdayTranslator.get(day)}</h3>
      <input
        type="date"
        className="rounded-md text-slate-950 md:p-2 text-xs font-light"
        value={dateOfDay ? new Date(dateOfDay).toISOString().slice(0, 10) : ""}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default ModifyDayHeader;
