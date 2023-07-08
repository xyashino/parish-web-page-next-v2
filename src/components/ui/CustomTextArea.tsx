import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea, TextareaProps } from "@/components/ui/textarea";

interface Props extends TextareaProps {
  label?: string;
  description?: string;
}

const CustomTextArea = ({ label, description, id, ...props }: Props) => {
  return (
    <div className="grid w-full gap-1.5">
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <Textarea {...props} id={id} />
      {!!description && (
        <p className="text-sm text-muted-foreground">{description} </p>
      )}
    </div>
  );
};

export default CustomTextArea;
