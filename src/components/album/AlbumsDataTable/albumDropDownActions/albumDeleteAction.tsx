import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlbumCrud } from "@/lib/services/albums/crud";
import { useRouter } from "next/navigation";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";

interface Props {
  id: string;
}

export const AlbumDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    await AlbumCrud.delete(id);
    refresh();
  };

  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz usunąć ten album?",
        description:
          "Album zostanie trwale usunięty (w tym zdjęcia które się w nim znajdują).",
      }}
      triggerItem={
        <DataTableActionsDropDownItem
          text="Usuń"
          Icon={TrashIcon}
          className="text-destructive"
        />
      }
      footerConfig={{
        confirmText: "Usuń",
        doAfterConfirm: handleDelete,
      }}
    />
  );
};
