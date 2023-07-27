import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
  description?: string;
}

const CardHeaderWithSeparator = ({ title, description }: Props) => {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      <Separator className="w-11/12 mx-auto" />
    </CardHeader>
  );
};

export default CardHeaderWithSeparator;
