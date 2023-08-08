import { z } from "zod";
import { useAlbumDialogStore } from "@/lib/store";
import { ModifyDialogHeaderProps } from "@/components/CustomDialog/customDialogHeader";
import { modifyAlbumSchema } from "@/lib/schemas/album";
import { AlbumCrud } from "@/lib/services/albums/crud";
import { useRouter } from "next/navigation";

export const useModifyAlbumLogic = () => {
  const { defaultValues, close, id, isOpen, setIsOpen } = useAlbumDialogStore();
  const { refresh } = useRouter();
  const submitMethod = async (values: z.infer<typeof modifyAlbumSchema>) => {
    const { categoryId, subtitle, ...rest } = values;
    if (id)
      return AlbumCrud.update(id, {
        ...rest,
        categoryId: categoryId && categoryId !== "" ? categoryId : null,
        subtitle: subtitle ?? null,
      });
    await AlbumCrud.create({
      ...rest,
      categoryId: categoryId && categoryId !== "" ? categoryId : null,
      subtitle: subtitle ?? null,
      coverId: null,
    });
    close();
    refresh();
  };

  const headerData: ModifyDialogHeaderProps = {
    title: id ? "Edytujesz Album" : "Tworzysz nowy Album",
    subtitle: "Album służy do grupowania zdjęć",
  };

  return { defaultValues, id, submitMethod, headerData, isOpen, setIsOpen };
};
