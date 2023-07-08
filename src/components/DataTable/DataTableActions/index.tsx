import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  GearIcon,
  EyeOpenIcon,
  CrossCircledIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import DataTableActionItem from "@/components/DataTable/DataTableActions/dataTableActionItem";

interface Props {
  id: string;
  doAfterPreview?: () => void;
  doAfterEdit?: () => void;
  doAfterDelete?: () => void;
}

const DataTableActions = ({
  doAfterDelete,
  doAfterPreview,
  doAfterEdit,
}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Ustawienia menu</span>
          <GearIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DataTableActionItem
          text="Podgląd"
          icon={<EyeOpenIcon className="h-5 w-5" />}
          onClick={doAfterPreview}
        />
        <DataTableActionItem
          text="Edytuj"
          icon={<Pencil2Icon className="h-5 w-5" />}
          onClick={doAfterEdit}
        />
        <DropdownMenuSeparator />
        <DataTableActionItem
          text="Usuń"
          icon={<CrossCircledIcon className="h-5 w-5" />}
          className="text-red-500"
          onClick={doAfterDelete}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableActions;
