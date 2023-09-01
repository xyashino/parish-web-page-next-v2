import React from "react";
import { Day, Intention } from "@prisma/client";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { getActiveDayID, weekdayTranslator } from "@/lib/utils";
import { WeekIntentionsTabContent } from "./weekIntentionsTabContent";
import { CustomTriggerWithScroll } from "./customTriggerWithScroll";

interface Props {
  days: (Day & {
    intentions: Intention[];
  })[];
}

const TAB_LIST_ID = crypto.randomUUID();

export const WeekIntentionsContent = ({ days }: Props) => {
  return (
    <Tabs defaultValue={getActiveDayID(days)}>
      <TabsList
        className="flex h-auto w-full flex-wrap items-center justify-center"
        id={TAB_LIST_ID}
      >
        {days.map(({ day, id }) => (
          <CustomTriggerWithScroll
            id={id}
            key={id}
            translatedDay={weekdayTranslator.get(day) ?? day}
            tabID={TAB_LIST_ID}
          />
        ))}
      </TabsList>

      {days.map((day) => (
        <WeekIntentionsTabContent key={day.id} {...day} />
      ))}
    </Tabs>
  );
};
