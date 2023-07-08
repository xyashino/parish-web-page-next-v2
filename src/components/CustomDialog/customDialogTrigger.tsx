import React, { PropsWithChildren } from "react";
import { DialogTrigger } from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import ButtonWithIcon from "@/components/ButtonWithIcon";
export interface ModifyTriggerDialogProps extends PropsWithChildren {
  element?: React.ReactNode;
  empty?: boolean;
  text?: string;
}

const CustomDialogTrigger = ({
  element,
  empty,
  text,
}: ModifyTriggerDialogProps) => {
  if (empty) return null;

  return (
    <DialogTrigger asChild className="min:w-1/4 mx-auto group">
      {element ? (
        element
      ) : (
        <ButtonWithIcon text={text ?? ""} Icon={PlusCircledIcon} />
      )}
    </DialogTrigger>
  );
};
export default CustomDialogTrigger;
