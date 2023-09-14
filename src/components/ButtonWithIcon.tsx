import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
  text?: string;
  Icon: React.ElementType;
}

export const ButtonWithIcon = ({ Icon, text, ...props }: Props) => (
  <Button
    {...props}
    className={cn("flex items-center space-x-2", props.className)}
  >
    <Icon className="h-4 w-4" />{" "}
    {text && <span className="font-bold uppercase">{text}</span>}
  </Button>
);
