import { z } from "zod";
import { useAlbumDialogStore } from "@/lib/store";
import { ModifyDialogHeaderProps } from "@/components/CustomDialog/customDialogHeader";
import { modifyAlbumSchema } from "@/lib/schemas/album";
import { AlbumApiService } from "@/lib/services/albums/api";
import { useRouter } from "next/navigation";

export const useModifyAlbumLogic = () => {
  const { defaultValues, close, id, isOpen, setIsOpen } = useAlbumDialogStore();
  const { refresh } = useRouter();
  const submitMethod = async (values: z.infer<typeof modifyAlbumSchema>) => {
    const { categoryId, subtitle, ...rest } = values;
    if (id)
      await AlbumApiService.update(id, {
        ...rest,
        categoryId: categoryId && categoryId !== "" ? categoryId : null,
        subtitle: subtitle ?? null,
      });
    else
      await AlbumApiService.create({
        ...rest,
        categoryId: categoryId && categoryId !== "" ? categoryId : null,
        subtitle: subtitle ?? null,
        coverId: null,
      });
    refresh();
    close();
  };

  const headerData: ModifyDialogHeaderProps = {
    title: id ? "Edytujesz Album" : "Tworzysz nowy Album",
    subtitle: "Album służy do grupowania zdjęć",
  };

  return { defaultValues, id, submitMethod, headerData, isOpen, setIsOpen };
};
