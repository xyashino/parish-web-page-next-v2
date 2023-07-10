import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
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
    <DataTableActionsDropDawnItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};

export default IntentionsEditAction;
