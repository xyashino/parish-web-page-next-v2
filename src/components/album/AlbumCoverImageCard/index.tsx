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

export const AlbumCoverImageCard = ({ imageCoverId }: Props) => {
  const { coverImagePath, setCoverImageByImageId, setCoverImage } =
    useAlbumCoverImageStore();

  useLayoutEffect(() => {
    if (imageCoverId === null) return setCoverImage(imageCoverId);
    setCoverImageByImageId(imageCoverId);
  }, [imageCoverId, setCoverImage, setCoverImageByImageId]);

  return (
    <Card className="w-full lg:w-1/3">
      <AlbumCoverImageCardHeader />
      {coverImagePath ? (
        <DisplayCoverImage path={coverImagePath} />
      ) : (
        <MissingImageContent />
      )}
    </Card>
  );
};
