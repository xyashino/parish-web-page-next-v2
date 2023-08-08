import React from "react";
import ConfirmAlert from "@/components/ConfirmAlert";
import { ResetIcon } from "@radix-ui/react-icons";

interface Props {
  clearAll: () => void;
}

const triggerValue = (
  <>
    <ResetIcon className="mr-2 h-4 w-4" /> Wyczyść
  </>
);
export const ClearButtonWithAlert = ({ clearAll }: Props) => {
  return (
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
  );
};
