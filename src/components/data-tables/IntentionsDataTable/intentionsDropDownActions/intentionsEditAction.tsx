import React, { SyntheticEvent } from "react";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const IntentionsEditAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleNavigate = (e?: SyntheticEvent) => {
    e?.preventDefault();
    push(`/admin/intentions/${id}`);
  };

  return (
    <DataTableActionsDropDownItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};

export default IntentionsEditAction;
