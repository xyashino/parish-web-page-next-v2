import React from "react";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Navigation } from "@/types/enums/navigation.enum";

interface Props {
  id: string;
}

export const IntentionsEditAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleNavigate = () => {
    push(`${Navigation.BASE_ADMIN_INTENTIONS}/${id}`);
  };

  return (
    <DataTableActionsDropDownItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};
