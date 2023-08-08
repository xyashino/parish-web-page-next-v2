import React, {
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  title: string;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export const BaseCard = ({ children, title, Icon, ...props }: Props) => {
  return (
    <Card {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-bold">{title}</CardTitle>
        {Icon && <Icon className="ml-4 h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
