"use client";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AlbumTabsValue } from "../album-tabs-value.enum";
import { AlbumEditCardHeader } from "./albumEditCardHeader";
import { MissingImagesInfo } from "./missingImagesInfo";
import { Separator } from "@/components/ui/separator";
import { DisplayAlbumImages } from "./displayAlbumImages";
import { Image } from "@prisma/client";

interface Props {
  images: Image[];
}

export const AlbumEditContent = ({ images }: Props) => (
  <TabsContent value={AlbumTabsValue.EDIT_IMAGES} className="w-full">
    <Card>
      <AlbumEditCardHeader />
      <Separator className="w-5/6 mx-auto" />
      <CardContent>
        {images.length === 0 ? (
          <MissingImagesInfo />
        ) : (
          <DisplayAlbumImages images={images} />
        )}
      </CardContent>
    </Card>
  </TabsContent>
);
