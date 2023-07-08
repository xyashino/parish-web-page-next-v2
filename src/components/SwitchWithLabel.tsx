import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { forwardRef, useImperativeHandle, useState } from "react";

interface Props {
  id: string;
  labelText: string;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
}

const SwitchWithLabel = forwardRef<{ isChecked: boolean }, Props>(
  ({ id, labelText, defaultChecked = false, onChange }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useImperativeHandle(ref, () => ({
      isChecked,
    }));
    const handleCheckedChange = (value: boolean) => {
      setIsChecked(value);
      onChange && onChange(value);
    };
    return (
      <div className="flex items-center space-x-2">
        <Switch
          id={id}
          checked={isChecked}
          onCheckedChange={handleCheckedChange}
        />
        <Label htmlFor={id}>{labelText}</Label>
      </div>
    );
  }
);

SwitchWithLabel.displayName = "SwitchWithLabel";
export default SwitchWithLabel;
