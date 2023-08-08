"use client";
import React from "react";
import ModifyAnnouncementsControls from "./modifyAnnouncementsControls";
import ModifyAnnouncementsMainCard from "@/components/announcements/ModifyAnnouncements/modifyAnnouncementsMainCard";
import { Separator } from "@/components/ui/separator";
import { Announcements } from "@prisma/client";
import { useModifyAnnouncementLogic } from "@/lib/hooks/useModifyAnnouncementLogic";

interface Props {
  defaultValue?: Announcements;
}

const ModifyAnnouncements = ({ defaultValue }: Props) => {
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
      />
    </div>
  );
};

export default ModifyAnnouncements;
