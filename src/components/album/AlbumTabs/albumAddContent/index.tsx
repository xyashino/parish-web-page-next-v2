import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dropzone } from "./dropzone";
import { AlbumAddCardHeader } from "./albumAddCardHeader";
import { AlbumTabsValue } from "../album-tabs-value.enum";
export const AlbumAddContent = () => {
  return (
    <TabsContent value={AlbumTabsValue.ADD_IMAGES} className="w-full">
      <Card>
        <AlbumAddCardHeader />
        <CardContent>
          <Dropzone />
        </CardContent>
      </Card>
    </TabsContent>
  );
};
