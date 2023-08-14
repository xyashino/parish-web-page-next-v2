import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlbumInfoCardHeader } from "./albumInfoCardHeader";
import { AlbumInfoCardInfo, AlbumInfoCardInfoProps } from "./albumInfoCardInfo";

export const AlbumInfoCard = (props: AlbumInfoCardInfoProps) => (
  <Card className="w-1/3">
    <CardContent>
      <AlbumInfoCardHeader />
      <AlbumInfoCardInfo {...props} />
    </CardContent>
  </Card>
);
