import React, { SyntheticEvent } from "react";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { UpdateIcon } from "@radix-ui/react-icons";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/cards/CardHeaderWithSeparator";
import { DayIntentions } from "@/types/week-intentions-store";
import { ClearButtonWithAlert } from "./clearButtonWithAlert";
import { DeleteButtonWithAlert } from "./deleteButtonWithAlert";
import { IntentionsApiService } from "@/lib/services/intentions";

export const ModifyWeekIntentionsControls = () => {
  const { clearAll, weekIntentions, dayIntentions } = useWeekIntentionsStore();

  const handleSave = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { id, ...restWeekIntentions } = weekIntentions;
    const days: Omit<DayIntentions, "id">[] = [];

    dayIntentions.forEach((day) => {
      const { weekId, id, ...restDay } = day;
      days.push(restDay);
    });

    const body = {
      ...restWeekIntentions,
      days,
    };

    !!id
      ? await IntentionsApiService.update(id, body)
      : await IntentionsApiService.create(body);
  };

  return (
    <Card>
      <CardHeaderWithSeparator title="Zarządzaj intencjami" />
      <CardContent className="flex flex-wrap space-y-4  items-center">
        <ButtonWithIcon
          text="Zapisz"
          Icon={UpdateIcon}
          onClick={handleSave}
          className="w-full"
        />
        <ClearButtonWithAlert clearAll={clearAll} />
        {!!weekIntentions.id && (
          <DeleteButtonWithAlert deleteMethod={() => {}} />
        )}
      </CardContent>
    </Card>
  );
};
