import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weekdayTranslator } from "@/lib/utils";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import ModifyDayIntentions from "@/components/ModifyWeekIntentions/modifyDayIntentions";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";

const ModifyWeekIntentionsTabs = () => {
  const { dayIntentions, clearAll, activeDay, updateActiveDay } =
    useWeekIntentionsStore();
  return (
    <DropShadowCard className="mt-8">
      <Tabs defaultValue={activeDay} onValueChange={updateActiveDay}>
        <TabsList className="flex h-auto w-full flex-wrap items-center justify-center">
          {Array.from(dayIntentions).map(([id, value]) => (
            <TabsTrigger
              key={id}
              value={id}
              className="px-4 font-mono font-bold uppercase text-md xl:text-xl flex-grow min-w-1/4"
            >
              {weekdayTranslator.get(value.day)}
            </TabsTrigger>
          ))}
        </TabsList>

        {Array.from(dayIntentions).map(([id, value]) => (
          <ModifyDayIntentions id={id} key={id} {...value} />
        ))}
      </Tabs>
    </DropShadowCard>
  );
};

export default ModifyWeekIntentionsTabs;
