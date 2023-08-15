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

export const CustomFormControlItem = ({
  children,
  description,
  label,
}: Props) => (
  <FormItem>
    {!!label && <FormLabel>{label}</FormLabel>}
    <FormControl className="items-center">{children}</FormControl>
    {!!description && <FormDescription>{description}</FormDescription>}
    <FormMessage />
  </FormItem>
);
