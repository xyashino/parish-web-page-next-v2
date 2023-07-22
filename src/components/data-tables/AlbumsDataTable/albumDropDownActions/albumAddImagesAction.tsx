import React from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const AlbumAddImagesAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleAddImages = () => {
    push(`/admin/albums/${id}`);
  };
  return (
    <DataTableActionsDropDawnItem
      text="Zdjęcia"
      Icon={FilePlusIcon}
      onClick={handleAddImages}
    />
  );
};

export default AlbumAddImagesAction;
