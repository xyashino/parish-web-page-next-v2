import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface Props extends ButtonProps {
  text?: string;
  Icon: React.ElementType;
}

const ButtonWithIcon = ({ Icon, text, ...props }: Props) => {
  return (
    <Button {...props}>
      <Icon className="mr-2 h-4 w-4" /> {text && <span>{text}</span>}
    </Button>
  );
};

export default ButtonWithIcon;
