import React from "react";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

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
        <Button variant="destructive" className="w-full">
          <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
        </Button>
      }
      footerConfig={{
        doAfterConfirm: clearAll,
      }}
    />
  );
};
