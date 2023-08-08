"use client";
import React from "react";
import { Album, Category } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUploadedImagesStore } from "@/lib/store/useUploadedImagesStore";

interface Props {
  albumData: Album & { category: Category | null };
}

export const AlbumInfoCard = ({
  albumData: { title, subtitle, show, category },
}: Props) => {
  const { images } = useUploadedImagesStore();
  return (
    <Card className="w-1/3">
      <CardHeader>
        <div className="grid grid-cols-10">
          <CardTitle className="col-span-9">Informacje o Albumie</CardTitle>
          <CardDescription className="text-xs col-span-9">
            Podstawowe informacje o wyświetlanym albumie
          </CardDescription>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <ul className="text-sm flex flex-col justify-around h-full">
          <li>
            <span className="font-bold">Tytuł: </span>
            <span>{title}</span>
          </li>
          <li>
            <span className="font-bold">Podtytuł: </span>
            <span>{subtitle ?? "BRAk"}</span>
          </li>
          <li>
            <span className="font-bold">Aktywny: </span>
            <span>{show ? "Tak" : "Nie"}</span>
          </li>
          <li>
            <span className="font-bold">Kategoria: </span>
            <span>{category?.name ?? "BRAK"}</span>
          </li>

          <li>
            <span className="font-bold">Liczba zdjęć: </span>
            <span>{images.length}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
