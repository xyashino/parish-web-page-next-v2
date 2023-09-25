import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { CategoriesApiService } from "@/lib/services/categories";
import { useRouter } from "next/navigation";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";

interface Props {
  id: string;
}

export const CategoryDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    await CategoriesApiService.delete(id);
    refresh();
  };

  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz usunąć tą kategorie?",
        description:
          "Z albmumów tej kategori zostanie ona usnięta ( albumy pozostaną bez przyznanej kategorii ).",
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
