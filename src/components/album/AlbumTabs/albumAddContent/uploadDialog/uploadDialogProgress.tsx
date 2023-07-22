import { Progress } from "@/components/ui/progress";
import {
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useProgressStore } from "@/lib/store/useProgressStore";

export const UploadDialogProgress = () => {
  const { value } = useProgressStore();

  return (
    <div className="flex flex-col items-center">
      <AlertDialogTitle>Uplodowanie zdjęć...</AlertDialogTitle>
      <Progress value={value} className="w-4/5 mx-auto" />
      <AlertDialogDescription>{value.toFixed()} %</AlertDialogDescription>
    </div>
  );
};
