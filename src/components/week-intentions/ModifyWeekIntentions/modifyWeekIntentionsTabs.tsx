import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weekdayTranslator } from "@/lib/utils";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { ModifyDayIntentions } from "./modifyDayIntentions";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/cards/CardHeaderWithSeparator";

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
                className="px-4 font-extrabold capitalize text-xl flex-grow basis-1/3 md:basis-1/4 lg:basis-auto"
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
