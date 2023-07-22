import { z } from "zod";
import { useAlbumsStore } from "@/lib/store/albums/useAlbumsStore";
import { useAlbumDialogStore } from "@/lib/store";
import { useCustomDialogStore } from "@/lib/store/useCustomDialogStore";
import { modifyAlbumSchema } from "@/components/ModifyAlbumDialog/modify-album.schema";
import { ModifyDialogHeaderProps } from "@/components/CustomDialog/customDialogHeader";

export const useModifyAlbumLogic = () => {
  const { createEntity, updateEntity } = useAlbumsStore();
  const { defaultValues, resetDefaultValues, id } = useAlbumDialogStore();
  const { close } = useCustomDialogStore();

  const submitMethod = async (values: z.infer<typeof modifyAlbumSchema>) => {
    const { categoryId, subtitle, ...rest } = values;
    if (id)
      return updateEntity({
        id,
        ...rest,
        categoryId: categoryId ?? null,
        subtitle: subtitle ?? null,
      });
    await createEntity({
      ...rest,
      categoryId: categoryId ?? null,
      subtitle: subtitle ?? null,
      coverId: null,
    });
    close();
  };

  const headerData: ModifyDialogHeaderProps = {
    title: id ? "Edytujesz Album" : "Tworzysz nowy Album",
    subtitle: "Album służy do grupowania zdjęć",
  };

  return { defaultValues, resetDefaultValues, id, submitMethod, headerData };
};
