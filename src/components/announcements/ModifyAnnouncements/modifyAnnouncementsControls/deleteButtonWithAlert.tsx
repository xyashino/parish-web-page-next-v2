import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";

interface Props {
  onConfirm: () => void;
}

const triggerValue = (
  <>
    <TrashIcon className="mr-2 h-4 w-4" /> Usuń
  </>
);

export const DeleteButtonWithAlert = ({ onConfirm }: Props) => (
  <ConfirmAlert
    headerData={{
      title: "Czy na pewno chcesz usunąć ogłoszenia ?",
      description:
        "Zmiany zostaną wykoname trwale. Nie będzie można ich przywrócić.",
    }}
    triggerData={{
      triggerValue,
      className: "w-1/4 bg-red-500 hover:bg-red-600 transition-colors",
    }}
    footerData={{
      doAfterConfirm: onConfirm,
      confirmText: "Usuń",
    }}
  />
);
