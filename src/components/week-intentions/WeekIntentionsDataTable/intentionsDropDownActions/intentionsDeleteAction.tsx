import React from "react";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { IntentionsCrud } from "@/lib/services/intentions";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";

interface Props {
  id: string;
}

export const IntentionsDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    await IntentionsCrud.delete(id);
    refresh();
  };

  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz usunąć te intencje?",
        description: `Uwaga jeśli status jest "Aktywne / Active" to jest możliwość że intencje są wyświetlane na stronie głównej.`,
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
