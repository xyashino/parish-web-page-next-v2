import React, { ChangeEvent } from "react";
import { SelectStatus } from "@/components/SelectStatus";
import {
  AnnouncementsData,
  UpdateAnnouncementData,
} from "@/types/announcement-edit";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  data: AnnouncementsData;
  updateMethod: (a: UpdateAnnouncementData) => void;
}
export const AnnouncementsInputsFields = ({
  data: { status, subtitle },
  updateMethod,
}: Props) => {
  const updateStatus = (status: any) => {
    updateMethod({ key: "status", value: status });
  };
  console.log(status);

  const updateSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
    const subtitle = e.target.value;
    updateMethod({ key: "subtitle", value: subtitle });
  };
  return (
    <div className="lg:w-5/6 flex place-items-center  flex-col md:flex-row mx-auto space-x-10">
      <SelectStatus
        defaultValue={status}
        doAfterChange={updateStatus}
        label="Status:"
      />
      <div className="grow">
        <Label id="subtitle">Podtytuł:</Label>
        <Input
          value={subtitle ?? ""}
          id="subtitle"
          placeholder="Pole jest opcjonalne"
          className="w-full"
          onChange={updateSubtitle}
        />
      </div>
    </div>
  );
};
