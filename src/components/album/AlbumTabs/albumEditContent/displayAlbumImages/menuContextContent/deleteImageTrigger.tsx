import React from "react";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteImageApiCall } from "@/lib/services/images/api";
import { useRouter } from "next/navigation";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";

interface Props {
  id: string;
}

export const DeleteImageTrigger = ({ id }: Props) => {
  const { refresh } = useRouter();

  const onDeleteConfirm = async () => {
    await deleteImageApiCall(id);
    refresh();
  };

  return (
    <ContextMenuItem className="text-red-800" asChild>
      <ConfirmAlert
        headerConfig={{
          title: "Czy na pewno chcesz usunąć to zdjęcie?",
          description: "Zdjęcie zostanie trwale usunięte.",
        }}
        triggerItem={
          <ButtonWithIcon
            text="Usuń"
            variant="ghost"
            Icon={TrashIcon}
            className="text-red-800 w-full"
          />
        }
        triggerConfig={{
          hidden: true,
        }}
        footerConfig={{
          confirmText: "Usuń",
          doAfterConfirm: onDeleteConfirm,
        }}
      />
    </ContextMenuItem>
  );
};
