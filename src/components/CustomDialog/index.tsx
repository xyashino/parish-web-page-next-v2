import React, { PropsWithChildren } from "react";
import { CustomDialogFooter } from "./customDialogFooter";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CustomFormProps, CustomForm } from "@/components/Form/CustomForm";
import { z, ZodRawShape } from "zod";

import CustomDialogTrigger, {
  ModifyTriggerDialogProps,
} from "./customDialogTrigger";
import {
  ModifyDialogHeaderProps,
  CustomDialogHeader,
} from "./customDialogHeader";
import * as DialogPrimitive from "@radix-ui/react-dialog/dist";

interface ModifyDialogProps<T extends ZodRawShape>
  extends PropsWithChildren,
    DialogPrimitive.DialogProps {
  trigger: ModifyTriggerDialogProps;
  headerData: ModifyDialogHeaderProps;
  form?: Omit<CustomFormProps<z.ZodObject<T>>, "children">;
  submitText?: string;
}

export const CustomDialog = <T extends ZodRawShape>({
  trigger,
  headerData,
  children,
  form,
  submitText,
  ...props
}: ModifyDialogProps<T>) => {
  if (form)
    return (
      <Dialog {...props}>
        <CustomDialogTrigger {...trigger} />
        <DialogContent>
          <CustomForm {...form}>
            <CustomDialogHeader {...headerData} />
            {children}
            <CustomDialogFooter submitText={submitText} />
          </CustomForm>
        </DialogContent>
      </Dialog>
    );

  return (
    <Dialog {...props}>
      <CustomDialogTrigger {...trigger} />
      <DialogContent>
        <CustomDialogHeader {...headerData} />
        {children}
        <CustomDialogFooter submitText={submitText} />
      </DialogContent>
    </Dialog>
  );
};
