import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import EditIcon from "@/components/icons/EditIcon";
import { GearIcon, EyeOpenIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import DataTableActionItem from "@/components/DataTable/DataTableActions/dataTableActionItem";

interface Props {
  id: string;
}

const DataTableActions = ({ id }: Props) => {
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
        />
        <DataTableActionItem
          text="Edytuj"
          icon={<EditIcon className="h-5 w-5" />}
        />
        <DropdownMenuSeparator />
        <DataTableActionItem
          text="Usuń"
          icon={<CrossCircledIcon className="h-5 w-5" />}
          className="text-red-500"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableActions;
