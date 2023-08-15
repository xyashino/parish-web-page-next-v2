import React from "react";
import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
}

export const DataTableTitle = ({ title }: Props) => (
  <div className="mx-auto">
    <h3 className="text-foreground text-2xl font-bold">{title}</h3>
    <Separator />
  </div>
);
