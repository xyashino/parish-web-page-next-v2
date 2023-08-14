import React from "react";
import { Image } from "@prisma/client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlbumTabsValue } from "./album-tabs-value.enum";
import { AlbumAddContent } from "./albumAddContent";
import { AlbumEditContent } from "./albumEditContent";

interface Props {
  images: Image[];
}

export const AlbumTabs = ({ images }: Props) => (
  <div>
    <Tabs defaultValue={AlbumTabsValue.ADD_IMAGES}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={AlbumTabsValue.ADD_IMAGES}>Dodaj</TabsTrigger>
        <TabsTrigger value={AlbumTabsValue.EDIT_IMAGES}>Przeglądaj</TabsTrigger>
      </TabsList>
      <AlbumAddContent />
      <AlbumEditContent images={images} />
    </Tabs>
  </div>
);
