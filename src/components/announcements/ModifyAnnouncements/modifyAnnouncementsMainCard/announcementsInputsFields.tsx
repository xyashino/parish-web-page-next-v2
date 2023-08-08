import React from "react";
import { SelectStatus } from "@/components/SelectStatus";
import {
  AnnouncementsData,
  UpdateAnnouncementData,
} from "@/types/announcement-edit";
import { Status } from "@prisma/client";
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
  const updateStatus = (status: Status) => {
    updateMethod({ key: "status", value: status });
  };

  const updateSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subtitle = e.target.value;
    updateMethod({ key: "subtitle", value: subtitle });
  };
  return (
    <div className="w-5/6 flex mx-auto space-x-10">
      <div className="">
        <SelectStatus
          defaultValue={status}
          doAfterChange={updateStatus}
          label="Status:"
        />
      </div>
      <div className="flex-grow">
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
