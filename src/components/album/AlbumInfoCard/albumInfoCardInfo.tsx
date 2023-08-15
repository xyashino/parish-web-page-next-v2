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
  <>
    <p>
      <span className="font-bold">Tytuł: </span>
      <span>{title}</span>
    </p>
    <p>
      <span className="font-bold">Podtytuł: </span>
      <span>{subtitle || "Brak"}</span>
    </p>
    <p>
      <span className="font-bold">Aktywny: </span>
      <span>{show ? "Tak" : "Nie"}</span>
    </p>
    <p>
      <span className="font-bold">Kategoria: </span>
      <span>{category?.name ?? "BRAK"}</span>
    </p>

    <p>
      <span className="font-bold">Liczba zdjęć: </span>
      <span>{images.length}</span>
    </p>
  </>
);
