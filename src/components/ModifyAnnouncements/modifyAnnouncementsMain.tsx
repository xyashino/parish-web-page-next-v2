import React, { ChangeEvent, useLayoutEffect, useState } from "react";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";
import CustomTextArea from "@/components/ui/CustomTextArea";
import SelectStatus from "@/components/SelectStatus";
import { Separator } from "@/components/ui/separator";
import MdEditor from "@/components/MdEditor";
import { Announcements, Status } from "@prisma/client";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";

interface AnnouncementsData {
  status: Status;
  subtitle: string;
}

interface Props {
  defaultValue?: Announcements;
}

const ModifyAnnouncementsMain = ({ defaultValue }: Props) => {
  const { setEditorValue } = useMdEditorStore();
  const [announcementData, setAnnouncementData] = useState<AnnouncementsData>({
    status: "NONE",
    subtitle: "",
  });
  useLayoutEffect(() => {
    if (defaultValue) {
      const { status, subtitle, value } = defaultValue;
      setEditorValue(value);
      setAnnouncementData({
        status,
        subtitle,
      } as AnnouncementsData);
    }
  }, [defaultValue]);

  const updateStatus = (status: Status) => {
    setAnnouncementData((prev) => ({ ...prev, status }));
  };

  const updateSubtitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const subtitle = e.target.value;
    setAnnouncementData((prev) => ({ ...prev, subtitle }));
  };

  return (
    <DropShadowCard className="flex flex-col justify-around items-center  space-4  w-11/12 mx-auto">
      <div className="w-5/6 flex space-x-8 items-center">
        <SelectStatus
          defaultValue={announcementData.status}
          doAfterChange={updateStatus}
          label="Wybierz Status:"
        />
        <CustomTextArea
          value={announcementData.subtitle}
          label="Podtytuł"
          onChange={updateSubtitle}
        />
      </div>
      <Separator className="w-5/6 my-4" />
      <MdEditor editorHeight="600px" />
    </DropShadowCard>
  );
};

export default ModifyAnnouncementsMain;
