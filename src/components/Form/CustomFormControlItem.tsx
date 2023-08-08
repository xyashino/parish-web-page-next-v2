import React, { PropsWithChildren } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props extends PropsWithChildren {
  label?: string;
  description?: string;
}

export const CustomFormControlItem = <T extends {}>({
  children,
  description,
  label,
}: Props) => {
  return (
    <FormItem>
      {!!label && <FormLabel>{label}</FormLabel>}
      <FormControl className="items-center">{children}</FormControl>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
