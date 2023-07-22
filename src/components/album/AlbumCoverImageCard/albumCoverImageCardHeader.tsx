import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const AlbumCoverImageCardHeader = () => {
  return (
    <CardHeader>
      <CardTitle>Okładka</CardTitle>
      <CardDescription className="text-xs">
        Zdjęcie okładki albumu, które będzie wyświetlane jako głowne zdjęcie.
      </CardDescription>
      <Separator className="w-11/12 mx-auto" />
    </CardHeader>
  );
};
