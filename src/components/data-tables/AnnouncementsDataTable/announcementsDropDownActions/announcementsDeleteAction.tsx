import React, { SyntheticEvent } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { deleteAnnouncementApiCall } from "@/lib/services";

interface Props {
  id: string;
}

const AnnouncementsDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async (e?: SyntheticEvent) => {
    e?.preventDefault();
    await deleteAnnouncementApiCall(id);
    refresh();
  };

  return (
    <DataTableActionsDropDownItem
      text="Usuń"
      Icon={TrashIcon}
      onClick={handleDelete}
      className="text-red-500"
    />
  );
};

export default AnnouncementsDeleteAction;
