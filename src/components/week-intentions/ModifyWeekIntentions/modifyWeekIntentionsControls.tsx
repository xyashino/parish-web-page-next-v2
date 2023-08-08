import React, { SyntheticEvent } from "react";
import ConfirmAlert from "@/components/ConfirmAlert";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { UpdateIcon, ResetIcon } from "@radix-ui/react-icons";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/CardHeaderWithSeparator";
import { DayIntentions } from "@/types/interfaces/week-intentions-store.interface";
import { IntentionsCrud } from "@/lib/services/intentions";

const triggerValue = (
  <>
    <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
  </>
);

export const ModifyWeekIntentionsControls = () => {
  const { clearAll, weekIntentions, dayIntentions } = useWeekIntentionsStore();

  const handleSave = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { id, ...restWeekIntentions } = weekIntentions;
    const days: DayIntentions[] = [];
    dayIntentions.forEach((day) => {
      const { weekId, ...restDay } = day;
      days.push(restDay);
    });
    await IntentionsCrud.create({
      ...restWeekIntentions,
      days,
    });
  };

  return (
    <Card>
      <CardHeaderWithSeparator title="Zarządzaj intencjami" />
      <CardContent className="flex flex-col  space-y-4">
        <ButtonWithIcon
          text="Zapisz"
          Icon={UpdateIcon}
          onClick={handleSave}
          className="w-full"
        />

        <ConfirmAlert
          headerData={{
            title: "Czy na pewno chcesz wyczyścić wszystkie intencje?",
            description:
              "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
          }}
          triggerData={{
            triggerValue,
            className: "w-full",
          }}
          footerData={{
            doAfterConfirm: clearAll,
          }}
        />
      </CardContent>
    </Card>
  );
};
