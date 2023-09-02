import React from "react";
import { AlbumWithRelationsResponse } from "@/types/db/album";

export const AlbumInfoCardInfo = ({
  images,
  category,
  subtitle,
  title,
  show,
}: Exclude<AlbumWithRelationsResponse, null>) => (
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
