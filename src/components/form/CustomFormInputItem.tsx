import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomFormControlItem } from "./CustomFormControlItem";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  description?: string;
  controlClassName?: string;
  fieldName: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement>,
    label: ControllerRenderProps<FieldValues, Props["fieldName"]>,
  ) => void;
}

export const CustomFormInputItem = ({
  description,
  label,
  controlClassName,
  fieldName,
  onChange: changeMethod,
  ...props
}: Props) => {
  return (
    <FormField
      name={fieldName}
      render={({ field }) => (
        <CustomFormControlItem label={label} description={description}>
          <Input
            {...props}
            {...field}
            onChange={(e) => {
              changeMethod ? changeMethod(e, field) : field.onChange(e);
            }}
          />
        </CustomFormControlItem>
      )}
    />
  );
};
