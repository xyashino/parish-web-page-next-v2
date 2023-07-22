import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlbumTabsValue } from "./album-tabs-value.enum";
import { AlbumAddContent } from "./albumAddContent";
import { AlbumEditContent } from "./albumEditContent";

const AlbumTabs = () => {
  return (
    <div>
      <Tabs defaultValue={AlbumTabsValue.ADD_IMAGES}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={AlbumTabsValue.ADD_IMAGES}>Dodaj</TabsTrigger>
          <TabsTrigger value={AlbumTabsValue.EDIT_IMAGES}>
            Przeglądaj
          </TabsTrigger>
        </TabsList>
        <AlbumAddContent />
        <AlbumEditContent />
      </Tabs>
    </div>
  );
};

export default AlbumTabs;
