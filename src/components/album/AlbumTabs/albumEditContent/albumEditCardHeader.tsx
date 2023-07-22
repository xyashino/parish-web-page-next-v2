import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AlbumEditCardHeader = () => {
  return (
    <CardHeader>
      <CardTitle>Galeria Zdjęć</CardTitle>
      <CardDescription>Kliknij ppm na zdjęcie, aby je usunąć.</CardDescription>
    </CardHeader>
  );
};
