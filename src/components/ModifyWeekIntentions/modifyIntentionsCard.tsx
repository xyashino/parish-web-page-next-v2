"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";
import SelectStatus from "@/components/SelectStatus";

const ModifyIntentionsCard = () => {
  const { updateWeek, weekIntentions, updateStatus } = useWeekIntentionsStore();
  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    updateWeek(date);
  };

  return (
    <DropShadowCard className="space-y-4 grid place-items-center">
      <SelectStatus
        defaultValue={weekIntentions.status}
        doAfterChange={updateStatus}
        label="Wybierz Status:"
      />
      <div className="w-full">
        <Label className="pl-4">Ustaw Date:</Label>
        <Input type="date" className="w-full" onChange={handleDateInput} />
      </div>
    </DropShadowCard>
  );
};
export default ModifyIntentionsCard;
