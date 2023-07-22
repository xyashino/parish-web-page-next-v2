"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { AlbumCoverImageCardHeader } from "./albumCoverImageCardHeader";
import { useAlbumCoverImageStore } from "@/lib/store/useAlbumCoverImageStore";
import { MissingImageContent } from "./missingImageContent";
import { DisplayCoverImage } from "./displayCoverImage";

const AlbumCoverImageCard = () => {
  const { coverImagePath } = useAlbumCoverImageStore();
  return (
    <Card className="w-1/3">
      <AlbumCoverImageCardHeader />
      {coverImagePath ? (
        <DisplayCoverImage path={coverImagePath} />
      ) : (
        <MissingImageContent />
      )}
    </Card>
  );
};

export default AlbumCoverImageCard;
