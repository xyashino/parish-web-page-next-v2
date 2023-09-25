import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { Button } from "@/components/ui/button";

interface Props {
  onConfirm: () => void;
}

export const DeleteButtonWithAlert = ({ onConfirm }: Props) => (
  <ConfirmAlert
    headerConfig={{
      title: "Czy na pewno chcesz usunąć ogłoszenia ?",
      description:
        "Zmiany zostaną wykoname trwale. Nie będzie można ich przywrócić.",
    }}
    triggerItem={
      <Button variant="destructive" className="font-bold uppercase w-full">
        <TrashIcon className="mr-2 h-4 w-4" /> Usuń
      </Button>
    }
    footerConfig={{
      doAfterConfirm: onConfirm,
      confirmText: "Usuń",
    }}
  />
);
