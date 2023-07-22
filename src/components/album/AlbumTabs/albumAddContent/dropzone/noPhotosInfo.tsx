import React from "react";
import { Separator } from "@/components/ui/separator";
import { ImageIcon } from "@radix-ui/react-icons";

export const NoPhotosInfo = () => {
  return (
    <div className="m-auto text-gray-500 space-y-2 select-none text-center">
      <ImageIcon className="h-8 w-8 mx-auto" />
      <p>Przeciągnij i upuść zdjęcia tutaj</p>
      <div className="relative">
        <Separator className="w-5/6 mx-auto" />
        <p className="uppercase italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-bold group-hover:bg-muted transition-colors">
          Lub
        </p>
      </div>
      <p>Kliknij w to miejsce, aby wybrać zdjęcia z dysku</p>
    </div>
  );
};
