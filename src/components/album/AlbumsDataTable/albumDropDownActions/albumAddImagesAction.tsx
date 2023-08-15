import React from "react";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Navigation } from "@/types/enums";
import { DataTableActionsDropDownItem } from "@/components/DataTable";

interface Props {
  id: string;
}

export const AlbumAddImagesAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleAddImages = () => {
    push(`${Navigation.BASE_ADMIN_ALBUMS}/${id}`);
  };
  return (
    <DataTableActionsDropDownItem
      text="Zdjęcia"
      Icon={FilePlusIcon}
      onClick={handleAddImages}
    />
  );
};
