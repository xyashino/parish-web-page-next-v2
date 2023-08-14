import React from "react";
import { Album, Category, Image } from "@prisma/client";

export interface AlbumInfoCardInfoProps {
  albumData: Album & { category: Category | null };
  images: Image[];
}

export const AlbumInfoCardInfo = ({
  albumData: { title, subtitle, show, category },
  images,
}: AlbumInfoCardInfoProps) => (
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
);
