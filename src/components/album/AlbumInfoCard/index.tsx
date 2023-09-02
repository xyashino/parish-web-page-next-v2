import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlbumInfoCardHeader } from "./albumInfoCardHeader";
import { AlbumInfoCardInfo } from "./albumInfoCardInfo";
import { AlbumWithRelationsResponse } from "@/types/db/album";

export const AlbumInfoCard = (
  props: Exclude<AlbumWithRelationsResponse, null>,
) => (
  <Card className="w-1/3">
    <AlbumInfoCardHeader />
    <CardContent>
      <AlbumInfoCardInfo {...props} />
    </CardContent>
  </Card>
);
