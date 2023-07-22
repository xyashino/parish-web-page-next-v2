import { SwitchProps } from "@radix-ui/react-switch";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Props extends Omit<SwitchProps, "value" | "onChange"> {
  labelText?: string;
  value: boolean;
  onChange: (e: boolean) => void;
}

const SwitchWithLabel = ({ labelText, value, onChange, ...props }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch {...props} checked={value} onCheckedChange={onChange} />
      <Label htmlFor={props.id}>{labelText}</Label>
    </div>
  );
};

export default SwitchWithLabel;
