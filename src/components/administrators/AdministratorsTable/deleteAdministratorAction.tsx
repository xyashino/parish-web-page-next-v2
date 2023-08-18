import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteAdministratorApiCall } from "@/lib/services/administrators/api-calls";
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
      headerData={{
        title: "Czy na pewno chcesz usunąć administratora?",
        description: "Emial utraci dostęp do logowania.",
      }}
      triggerData={{
        triggerValue: <TrashIcon />,
        className: buttonVariants({ variant: "destructive" }),
      }}
      footerData={{
        confirmText: "Usuń",
        doAfterConfirm: handleDelete,
      }}
    />
  );
};
