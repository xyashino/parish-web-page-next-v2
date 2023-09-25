import React from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteAdministratorApiCall } from "@/lib/services/administrators";
import { useRouter } from "next/navigation";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";

interface Props {
  id: string;
}

export const DeleteAdministratorAction = ({ id }: Props) => {
  const { refresh } = useRouter();

  const handleDelete = async () => {
    await deleteAdministratorApiCall(id);
    refresh();
  };
  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz usunąć administratora?",
        description: "Emial utraci dostęp do logowania.",
      }}
      footerConfig={{
        confirmText: "Usuń",
        doAfterConfirm: handleDelete,
      }}
      triggerItem={
        <Button variant="destructive">
          <TrashIcon />
        </Button>
      }
    />
  );
};
