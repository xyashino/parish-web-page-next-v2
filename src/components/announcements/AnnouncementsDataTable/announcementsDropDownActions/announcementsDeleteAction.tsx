import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { ConfirmAlert } from "@/components/alerts/ConfirmAlert";
import { AnnouncementsApiService } from "@/lib/services/announcements";

interface Props {
  id: string;
}

export const AnnouncementsDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();

  const handleDelete = async () => {
    await AnnouncementsApiService.delete(id);
    refresh();
  };

  return (
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz usunąć te ogłoszenia?",
        description: `Uwaga jeśli status jest "Aktywne / Active" to jest możliwość że ogłoszenia są wyświetlane na stronie głównej.`,
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
