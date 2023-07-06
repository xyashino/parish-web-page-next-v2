import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { forwardRef, useImperativeHandle, useState } from "react";

interface Props {
  id: string;
  labelText: string;
  defaultChecked?: boolean;
}

const SwitchWithLabel = forwardRef<{ isChecked: boolean }, Props>(
  ({ id, labelText, defaultChecked = false }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useImperativeHandle(ref, () => ({
      isChecked,
    }));
    return (
      <div className="flex items-center space-x-2">
        <Switch id={id} checked={isChecked} onCheckedChange={setIsChecked} />
        <Label htmlFor={id}>{labelText}</Label>
      </div>
    );
  }
);

SwitchWithLabel.displayName = "SwitchWithLabel";
export default SwitchWithLabel;
