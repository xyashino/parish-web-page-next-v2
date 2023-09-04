"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { SelectStatus } from "@/components/SelectStatus";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/cards/CardHeaderWithSeparator";
import { getInputDateValue } from "@/lib/utils";

export const ModifyIntentionsCard = () => {
  const {
    updateWeek,
    weekIntentions: { status, startWeek },
    updateStatus,
  } = useWeekIntentionsStore();
  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    updateWeek(date);
  };
  return (
    <Card>
      <CardHeaderWithSeparator
        title="Ustawienia dla całego tygodnia"
        description="Tutaj możesz ustawić status doaz datę ( w przypadku daty ustaw najbliższy poniedziałek )"
      />
      <CardContent className="flex justify-around  flex-col  md:flex-row items-center space-y-2">
        <SelectStatus
          defaultValue={status}
          doAfterChange={updateStatus}
          label="Status:"
        />
        <div className="w-[200px]">
          <Label>Data:</Label>
          <Input
            type="date"
            className="rounded-md text-slate-950 md:p-2  font-light max-w-[200px] uppercase font-mono"
            defaultValue={getInputDateValue(startWeek)}
            onChange={handleDateInput}
          />
        </div>
      </CardContent>
    </Card>
  );
};
