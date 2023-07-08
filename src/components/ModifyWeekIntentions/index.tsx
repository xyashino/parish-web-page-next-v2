"use client";
import React, { useLayoutEffect } from "react";
import useWeekIntentionsStore from "@/lib/store/useWeekIntentionsStore";
import ModifyWeekIntentionsForm from "@/components/ModifyWeekIntentions/modifyWeekIntentionsForm";
import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";
import ModifyWeekIntentionsTabs from "@/components/ModifyWeekIntentions/modifyWeekIntentionsTabs";
import ModifyWeekIntentionsControls from "@/components/ModifyWeekIntentions/modifyWeekIntentionsControls";
import ModifyIntentionsCard from "@/components/ModifyWeekIntentions/modifyIntentionsCard";

interface Props {
  defaultValue?: WeekIntentionsStoreData;
}

const ModifyIntentions = ({ defaultValue }: Props) => {
  const { clearAll, updateAll } = useWeekIntentionsStore();

  useLayoutEffect(() => {
    defaultValue ? updateAll(defaultValue) : clearAll();
  }, [defaultValue]);

  return (
    <div>
      <div className="flex flex-wrap justify-around space-x-2 rounded-xl my-4 w-full">
        <ModifyWeekIntentionsControls />
        <ModifyIntentionsCard />
      </div>
      <ModifyWeekIntentionsForm />
      <ModifyWeekIntentionsTabs />
    </div>
  );
};

export default ModifyIntentions;
