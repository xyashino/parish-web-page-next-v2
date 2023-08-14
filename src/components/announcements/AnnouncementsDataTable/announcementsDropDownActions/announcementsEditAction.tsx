import React, { SyntheticEvent } from "react";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { DataTableActionsDropDownItem } from "@/components/DataTable/DataTableActionsDropDownItem";
import { Navigation } from "@/types/enums/navigation.enum";

interface Props {
  id: string;
}

export const AnnouncementsEditAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleNavigate = (e?: SyntheticEvent) => {
    e?.preventDefault();
    push(`${Navigation.BASE_ADMIN_ANNOUNCEMENTS}/${id}`);
  };
  return (
    <DataTableActionsDropDownItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};
