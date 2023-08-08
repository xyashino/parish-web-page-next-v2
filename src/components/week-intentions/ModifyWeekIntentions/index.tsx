"use client";
import React, { useLayoutEffect } from "react";
import ModifyWeekIntentionsForm from "@/components/week-intentions/ModifyWeekIntentions/modifyWeekIntentionsForm";
import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";
import ModifyWeekIntentionsTabs from "@/components/week-intentions/ModifyWeekIntentions/modifyWeekIntentionsTabs";
import ModifyWeekIntentionsControls from "@/components/week-intentions/ModifyWeekIntentions/modifyWeekIntentionsControls";
import ModifyIntentionsCard from "@/components/week-intentions/ModifyWeekIntentions/modifyIntentionsCard";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";

interface Props {
  defaultValue?: WeekIntentionsStoreData;
}

const ModifyWeekIntentions = ({ defaultValue }: Props) => {
  const { clearAll, updateAll } = useWeekIntentionsStore();
  const { setEditorValue } = useMdEditorStore();

  useLayoutEffect(() => {
    setEditorValue("");
    defaultValue ? updateAll(defaultValue) : clearAll();
  }, [defaultValue, updateAll, clearAll, setEditorValue]);

  return (
    <div className="w-11/12 mx-auto space-y-8">
      <div className="flex flex-wrap justify-around space-x-2 rounded-xl w-full">
        <ModifyWeekIntentionsControls />
        <ModifyIntentionsCard />
      </div>
      <ModifyWeekIntentionsForm />
      <ModifyWeekIntentionsTabs />
    </div>
  );
};
export const revalidate = 0;
export default ModifyWeekIntentions;
