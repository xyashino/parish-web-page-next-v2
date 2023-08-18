import React, { SyntheticEvent } from "react";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteImageApiCall } from "@/lib/services/images/api-calls";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const TriggerValue = (
  <>
    <span>Usuń</span> <TrashIcon />
  </>
);

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
        headerData={{
          title: "Czy na pewno chcesz usunąć to zdjęcie?",
          description: "Zdjęcie zostanie trwale usunięte.",
        }}
        triggerData={{
          triggerValue: TriggerValue,
          disableAllClasses: true,
          className: "w-full flex items-center justify-around",
          hidden: true,
        }}
        footerData={{
          confirmText: "Usuń",
          doAfterConfirm: onDeleteConfirm,
        }}
      />
    </ContextMenuItem>
  );
};
