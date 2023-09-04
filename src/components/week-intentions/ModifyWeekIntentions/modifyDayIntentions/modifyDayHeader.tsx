import React, { ChangeEvent } from "react";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { DayIntentions } from "@/types/week-intentions-store";
import { getInputDateValue, weekdayTranslator } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export const ModifyDayHeader = ({
  day,
  dateOfDay,
}: Omit<DayIntentions, "intentions">) => {
  const { updateDay } = useWeekIntentionsStore();
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    updateDay(date);
  };

  return (
    <div className="flex w-full items-center justify-between rounded-t-2xl px-8 py-4 text-sm font-bold text-slate-50 bg-slate-950 md:text-xl">
      <h3 className="mr-2 uppercase">{weekdayTranslator.get(day)}</h3>
      <Input
        type="date"
        className="rounded-md text-slate-950 md:p-2 text-xs font-light max-w-[140px] uppercase font-mono"
        value={getInputDateValue(dateOfDay)}
        onChange={handleDateChange}
      />
    </div>
  );
};
