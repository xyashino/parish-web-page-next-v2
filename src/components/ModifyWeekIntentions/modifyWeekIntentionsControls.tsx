import React, { SyntheticEvent } from "react";
import ConfirmAlert from "@/components/ConfirmAlert";
import useWeekIntentionsStore from "@/lib/store/useWeekIntentionsStore";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";
import { UpdateIcon, ResetIcon } from "@radix-ui/react-icons";
import ButtonWithIcon from "@/components/ButtonWithIcon";

const triggerValue = (
  <>
    <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
  </>
);

const ModifyWeekIntentionsControls = () => {
  const { clearAll, weekIntentions, dayIntentions } = useWeekIntentionsStore();

  const handleSave = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("save", dayIntentions, weekIntentions);
  };

  return (
    <DropShadowCard className="flex flex-col items-center justify-around space-y-4">
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
    </DropShadowCard>
  );
};

export default ModifyWeekIntentionsControls;
