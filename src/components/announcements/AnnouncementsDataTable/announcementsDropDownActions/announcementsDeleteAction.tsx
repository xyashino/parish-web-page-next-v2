import React, { SyntheticEvent } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { AnnouncementsCrud } from "@/lib/services";

interface Props {
  id: string;
}

const AnnouncementsDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async (e?: SyntheticEvent) => {
    e?.preventDefault();
    await AnnouncementsCrud.delete(id);
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
