import React, { PropsWithChildren } from "react";
import { Form } from "@/components/ui/form";
import { DefaultValues, useForm } from "react-hook-form";
import { z, ZodRawShape } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface CustomFormProps<T extends z.ZodObject<ZodRawShape>>
  extends PropsWithChildren {
  formSchema: T;
  defaultValues?: DefaultValues<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => void;
  className?: string;
}

const CustomForm = <T extends z.ZodObject<ZodRawShape>>({
  children,
  formSchema,
  defaultValues,
  onSubmit,
  className,
}: CustomFormProps<T>) => {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </Form>
  );
};

export default CustomForm;
