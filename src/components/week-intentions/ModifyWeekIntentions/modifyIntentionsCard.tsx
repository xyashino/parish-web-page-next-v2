"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import SelectStatus from "@/components/SelectStatus";
import { Card, CardContent } from "@/components/ui/card";
import CardHeaderWithSeparator from "@/components/CardHeaderWithSeparator";

const ModifyIntentionsCard = () => {
  const { updateWeek, weekIntentions, updateStatus } = useWeekIntentionsStore();
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
      <CardContent className="flex justify-around">
        <SelectStatus
          defaultValue={weekIntentions.status}
          doAfterChange={updateStatus}
          label="Status:"
        />
        <div className="w-[200px]">
          <Label>Data:</Label>
          <Input
            type="date"
            className="w-full uppercase"
            onChange={handleDateInput}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default ModifyIntentionsCard;
