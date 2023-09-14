import React from "react";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { ResetIcon } from "@radix-ui/react-icons";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";

interface Props {
  clearAll: () => void;
}

export const ClearButtonWithAlert = ({ clearAll }: Props) => {
  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz wyczyścić wszystkie intencje?",
        description:
          "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
      }}
      triggerItem={
        <ButtonWithIcon text="Wyczyść" Icon={ResetIcon} className="w-full" />
      }
      footerConfig={{
        doAfterConfirm: clearAll,
      }}
    />
  );
};
