import React, { PropsWithChildren } from "react";
import { Form } from "@/components/ui/form";
import { DeepPartial, useForm } from "react-hook-form";
import { z, ZodRawShape } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props<T extends ZodRawShape> extends PropsWithChildren {
  formSchema: z.ZodObject<T>;
  defaultValues?: DeepPartial<z.infer<z.ZodObject<T>>>;
  onSubmit: (values: z.infer<z.ZodObject<T>>) => void;
  className?: string;
}

const CustomForm = <T extends ZodRawShape>({
  children,
  formSchema,
  defaultValues,
  onSubmit,
  className,
}: Props<T>) => {
  const form = useForm<z.infer<typeof formSchema>>({
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
