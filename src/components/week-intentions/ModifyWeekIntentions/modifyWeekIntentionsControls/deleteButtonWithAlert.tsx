import React from "react";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface Props {
  deleteMethod: () => void;
}

export const DeleteButtonWithAlert = ({ deleteMethod }: Props) => {
  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz wyczyścić wszystkie intencje?",
        description:
          "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
      }}
      triggerItem={
        <Button variant="destructive">
          <TrashIcon className="mr-2 h-4 w-4" /> Usuń
        </Button>
      }
      footerConfig={{
        doAfterConfirm: deleteMethod,
      }}
    />
  );
};
