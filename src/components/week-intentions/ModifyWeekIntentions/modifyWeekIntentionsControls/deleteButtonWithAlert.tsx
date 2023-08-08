import React from "react";
import { ConfirmAlert } from "@/components/ConfirmAlert";
import { TrashIcon } from "@radix-ui/react-icons";

interface Props {
  deleteMethod: () => void;
}

const triggerValue = (
  <>
    <TrashIcon className="mr-2 h-4 w-4" /> Usuń
  </>
);
export const DeleteButtonWithAlert = ({ deleteMethod }: Props) => {
  return (
    <ConfirmAlert
      headerData={{
        title: "Czy na pewno chcesz wyczyścić wszystkie intencje?",
        description:
          "Zmiany zostaną zrobione lokalnie. Musisz je zapisać, aby utrwalić.",
      }}
      triggerData={{
        triggerValue,
        className: "bg-red-500 hover:bg-red-600 w-full",
      }}
      footerData={{
        doAfterConfirm: deleteMethod,
      }}
    />
  );
};
