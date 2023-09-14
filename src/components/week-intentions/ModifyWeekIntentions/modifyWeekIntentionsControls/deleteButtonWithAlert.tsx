import React from "react";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { TrashIcon } from "@radix-ui/react-icons";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";

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
        <ButtonWithIcon
          text="Usuń"
          Icon={TrashIcon}
          className="w-full"
          variant="destructive"
        />
      }
      footerConfig={{
        doAfterConfirm: deleteMethod,
      }}
    />
  );
};
