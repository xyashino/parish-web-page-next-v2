import React, { SyntheticEvent } from "react";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteImageApiCall } from "@/lib/services/images/api-calls";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
}

export const DeleteImageTrigger = ({ id }: Props) => {
  const { refresh } = useRouter();

  const handleDeleteClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDeleteConfirm = async () => {
    await deleteImageApiCall(id);
    refresh();
  };

  return (
    <ContextMenuItem onClick={handleDeleteClick} className="text-red-800">
      <ConfirmAlert
        headerConfig={{
          title: "Czy na pewno chcesz usunąć to zdjęcie?",
          description: "Zdjęcie zostanie trwale usunięte.",
        }}
        triggerItem={
          <Button
            variant="destructive"
            className="w-full flex items-center justify-around"
          >
            <TrashIcon className="mr-2 h-4 w-4" /> Usuń
          </Button>
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
