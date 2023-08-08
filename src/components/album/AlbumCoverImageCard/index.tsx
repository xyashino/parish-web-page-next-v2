"use client";
import React, { useLayoutEffect } from "react";
import { Card } from "@/components/ui/card";
import { AlbumCoverImageCardHeader } from "./albumCoverImageCardHeader";
import { useAlbumCoverImageStore } from "@/lib/store/useAlbumCoverImageStore";
import { MissingImageContent } from "./missingImageContent";
import { DisplayCoverImage } from "./displayCoverImage";

interface Props {
  imageCoverId: string | null;
}

const AlbumCoverImageCard = ({ imageCoverId }: Props) => {
  const { coverImagePath, setCoverImageByImageId } = useAlbumCoverImageStore();

  useLayoutEffect(() => {
    if (!imageCoverId) return;
    setCoverImageByImageId(imageCoverId);
  }, []);

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
