import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  separatorClasses?: string;
}

export const CardHeaderWithSeparator = ({
  title,
  description,
  separatorClasses,
}: Props) => {
  const separatorClassesDefault = cn("w-11/12 mx-auto", separatorClasses);

  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      <Separator className={separatorClassesDefault} />
    </CardHeader>
  );
};
