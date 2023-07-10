import React, { FormEvent, PropsWithChildren } from "react";

import CustomDialogTrigger, {
  ModifyTriggerDialogProps,
} from "./customDialogTrigger";
import CustomDialogHeader, {
  ModifyDialogHeaderProps,
} from "./customDialogHeader";
import CustomDialogFooter from "./customDialogFooter";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CustomForm, { CustomFormProps } from "@/components/Form/CustomForm";
import { z, ZodAny, ZodRawShape } from "zod";
import { useCustomDialogStore } from "@/lib/store/useCustomDialogStore";

interface ModifyDialogProps<T extends ZodRawShape> extends PropsWithChildren {
  trigger: ModifyTriggerDialogProps;
  headerData: ModifyDialogHeaderProps;
  form?: Omit<CustomFormProps<z.ZodObject<T>>, "children">;
  doBeforeClose?: () => void;
}

const CustomDialog = <T extends ZodRawShape>({
  trigger,
  headerData,
  children,
  form,
  doBeforeClose,
}: ModifyDialogProps<T>) => {
  const { isOpen, setIsOpen } = useCustomDialogStore();

  const handleDialogChange = (state: boolean) => {
    if (!state) doBeforeClose && doBeforeClose();
    setIsOpen(state);
  };

  if (form)
    return (
      <Dialog onOpenChange={handleDialogChange} open={isOpen}>
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
    <Dialog onOpenChange={handleDialogChange} open={isOpen}>
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
