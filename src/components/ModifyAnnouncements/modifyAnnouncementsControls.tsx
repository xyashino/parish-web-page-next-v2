import React from "react";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { ResetIcon, UpdateIcon } from "@radix-ui/react-icons";
import ConfirmAlert from "@/components/ConfirmAlert";
const triggerValue = (
  <>
    <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
  </>
);
const ModifyAnnouncementsControls = () => {
  return (
    <DropShadowCard className="flex justify-around items-center justify-around space-4  w-5/6 mx-auto">
      <ButtonWithIcon text="Zapisz" Icon={UpdateIcon} className="w-1/4" />
      <ConfirmAlert
        headerData={{
          title: "Czy na pewno chcesz wyczyścić wszystkie intencje?",
          description:
            "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
        }}
        triggerData={{
          triggerValue,
          className: "w-1/4",
        }}
      />
    </DropShadowCard>
  );
};

export default ModifyAnnouncementsControls;
