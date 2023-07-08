import React, { FormEvent, PropsWithChildren } from "react";

import CustomDialogTrigger, {
  ModifyTriggerDialogProps,
} from "./customDialogTrigger";
import CustomDialogHeader, {
  ModifyDialogHeaderProps,
} from "./customDialogHeader";
import CustomDialogFooter from "./customDialogFooter";
import useCustomDialogStore from "@/lib/store/useCustomDialogStore";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CustomForm, { CustomFormProps } from "@/components/Form/CustomForm";
import { ZodRawShape } from "zod";

interface ModifyDialogProps extends PropsWithChildren {
  trigger: ModifyTriggerDialogProps;
  headerData: ModifyDialogHeaderProps;
  form?: Omit<CustomFormProps<ZodRawShape>, "children">;
}

const CustomDialog = ({
  trigger,
  headerData,
  children,
  form,
}: ModifyDialogProps) => {
  const { isOpen, setIsOpen } = useCustomDialogStore();

  if (form)
    return (
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <CustomDialogTrigger {...trigger} />
        <DialogContent>
          <CustomForm {...form}>
            <CustomDialogHeader {...headerData} />
            {children}
            <CustomDialogFooter />
          </CustomForm>
        </DialogContent>
      </Dialog>
    );

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <CustomDialogTrigger {...trigger} />
      <DialogContent>
        <CustomDialogHeader {...headerData} />
        {children}
        <CustomDialogFooter />
      </DialogContent>
    </Dialog>
  );
};
export default CustomDialog;
