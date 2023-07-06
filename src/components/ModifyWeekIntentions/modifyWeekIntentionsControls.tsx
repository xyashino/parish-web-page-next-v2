import React, { SyntheticEvent } from "react";
import { Button } from "@/components/ui/button";
import ConfirmAlert from "@/components/ConfirmAlert";
import useWeekIntentionsStore from "@/lib/store/useWeekIntentionsStore";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";

const ModifyWeekIntentionsControls = () => {
  const { clearAll, weekIntentions, dayIntentions } = useWeekIntentionsStore();

  const handleSave = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("save", dayIntentions, weekIntentions);
  };

  return (
    <DropShadowCard className="flex flex-col items-center justify-around space-y-4">
      <Button onClick={handleSave} className="w-full">
        Zapisz
      </Button>
      <ConfirmAlert
        headerData={{
          title: "Czy na pewno chcesz wyczyścić wszystkie intencje?",
          description:
            "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
        }}
        triggerData={{
          triggerValue: "Wyczyść wszystko",
        }}
        footerData={{
          doAfterConfirm: () => clearAll(),
        }}
      />
    </DropShadowCard>
  );
};

export default ModifyWeekIntentionsControls;
