import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const AlbumInfoCardHeader = () => (
  <CardHeader>
    <div className="grid grid-cols-10">
      <CardTitle className="col-span-9">Informacje o Albumie</CardTitle>
      <CardDescription className="text-xs col-span-9">
        Podstawowe informacje o wyświetlanym albumie
      </CardDescription>
    </div>
    <Separator />
  </CardHeader>
);
