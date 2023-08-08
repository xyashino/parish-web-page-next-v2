import React, { PropsWithChildren } from "react";
import { DialogTrigger } from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
export interface ModifyTriggerDialogProps extends PropsWithChildren {
  element?: React.ReactNode;
  text?: string;
}

const CustomDialogTrigger = ({ element, text }: ModifyTriggerDialogProps) => {
  return (
    <DialogTrigger asChild className="min:w-1/4 mx-auto group cursor-pointer">
      {element ? (
        element
      ) : (
        <ButtonWithIcon text={text ?? ""} Icon={PlusCircledIcon} />
      )}
    </DialogTrigger>
  );
};
export default CustomDialogTrigger;
