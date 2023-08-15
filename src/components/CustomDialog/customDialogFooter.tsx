import React from "react";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  submitText?: string;
}

export const CustomDialogFooter = ({ submitText }: Props) => (
  <DialogFooter>
    <Button type="submit" className="mt-2">
      {submitText || "Zapisz"}
    </Button>
  </DialogFooter>
);
