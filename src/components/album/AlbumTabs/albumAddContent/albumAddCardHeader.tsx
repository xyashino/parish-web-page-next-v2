import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadDialog } from "@/components/album/AlbumTabs/albumAddContent/uploadDialog";

export const AlbumAddCardHeader = () => {
  return (
    <CardHeader className="lg:flex-row">
      <div className="grow space-y-2">
        <CardTitle>Dodajesz zdjęcia do Albumu</CardTitle>
        <CardDescription>
          <span>
            Pamietaj, kliknąć przycisk
            <span className="font-bold italic mx-1">Zapisz</span> po dodaniu
            zdjęć z dysku.
          </span>
          <span>
            Kliknij <span className="font-bold italic">PPM</span> na zdjęcie,
            aby usunąć je z listy.
          </span>
        </CardDescription>
      </div>
      <UploadDialog />
    </CardHeader>
  );
};
