"use client";
import React from "react";
import { ModifyAnnouncementsControls } from "./modifyAnnouncementsControls";
import { ModifyAnnouncementsMainCard } from "./modifyAnnouncementsMainCard";
import { Separator } from "@/components/ui/separator";
import { useModifyAnnouncementLogic } from "@/lib/hooks/useModifyAnnouncementLogic";
import { AnnouncementResponse } from "@/types/db/announcement";

interface Props {
  defaultValue?: Exclude<AnnouncementResponse, null>;
}

export const ModifyAnnouncements = ({ defaultValue }: Props) => {
  const { announcementData, updateAnnouncementData, methods } =
    useModifyAnnouncementLogic(defaultValue);
  return (
    <div>
      <ModifyAnnouncementsControls
        clearMethod={methods.clearEverything}
        saveMethod={methods.submitAnnouncement}
        deleteMethod={methods.deleteAnnouncement}
        isEdit={!!defaultValue}
      />
      <Separator className="w-5/6 mx-auto my-8" />
      <ModifyAnnouncementsMainCard
        data={announcementData}
        updateMethod={updateAnnouncementData}
        defaultContent={defaultValue?.value}
      />
    </div>
  );
};
