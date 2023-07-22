import React from "react";
import { CardContent } from "@/components/ui/card";
import { ImageIcon } from "@radix-ui/react-icons";

export const MissingImageContent = () => {
  return (
    <CardContent className="h-full   w-full text-slate-500 text-center">
      <ImageIcon className="w-full h-16" />
      <p className="text-xs mt-2">
        Najwidoczniej nie ma jeszcze okładki, dodaj ją w zakładce
        <span className="font-bold"> &quot;Przeglądaj&quot; </span>
        klikajac <span className="font-bold">PPM</span> na zdjęcie i wybierając
        odpowiednią opcje.
      </p>
    </CardContent>
  );
};
