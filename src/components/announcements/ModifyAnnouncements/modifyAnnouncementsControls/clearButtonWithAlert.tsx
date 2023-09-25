import React from "react";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface Props {
  onConfirm: () => void;
}

export const ClearButtonWithAlert = ({ onConfirm }: Props) => (
  <ConfirmAlert
    headerConfig={{
      title: "Czy na pewno chcesz wyczyścić ogłoszenia?",
      description:
        "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
    }}
    footerConfig={{
      doAfterConfirm: onConfirm,
      confirmText: "Wyczyść",
    }}
    triggerItem={
      <Button className="font-bold uppercase w-full">
        <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
      </Button>
    }
  />
);
