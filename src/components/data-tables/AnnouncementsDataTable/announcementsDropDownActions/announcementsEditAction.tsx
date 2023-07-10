import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const AnnouncementsEditAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleNavigate = (e?: SyntheticEvent) => {
    e?.preventDefault();
    console.log("Delete");
    push(`/admin/announcements/${id}`);
  };
  return (
    <DataTableActionsDropDawnItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};

export default AnnouncementsEditAction;
