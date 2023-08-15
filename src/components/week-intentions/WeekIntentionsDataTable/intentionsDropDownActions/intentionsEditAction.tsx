import React from "react";
import { useRouter } from "next/navigation";
import { Navigation } from "@/types/enums";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { DataTableActionsDropDownItem } from "@/components/DataTable";

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
