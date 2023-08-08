import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weekdayTranslator } from "@/lib/utils";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import ModifyDayIntentions from "@/components/week-intentions/ModifyWeekIntentions/modifyDayIntentions";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/CardHeaderWithSeparator";

export const ModifyWeekIntentionsTabs = () => {
  const { dayIntentions, activeDay, updateActiveDay } =
    useWeekIntentionsStore();
  return (
    <Card className="mt-8">
      <CardHeaderWithSeparator
        title="Podgląd intencji"
        description="Intencje z formularza sa dodawama do aktywnej aktualnie załadki (dnia tygodnia)."
      />

      <CardContent>
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
      </CardContent>
    </Card>
  );
};
