"use client";
import React from "react";
import ModifyAnnouncementsControls from "./modifyAnnouncementsControls";
import ModifyAnnouncementsMain from "@/components/ModifyAnnouncements/modifyAnnouncementsMain";
import { Separator } from "@/components/ui/separator";
import { Announcements } from "@prisma/client";

interface Props {
  defaultValue?: Announcements;
}

const ModifyAnnouncements = ({ defaultValue }: Props) => {
  return (
    <div>
      <ModifyAnnouncementsControls />
      <Separator className="w-5/6 mx-auto my-8" />
      <ModifyAnnouncementsMain defaultValue={defaultValue} />
    </div>
  );
};

export default ModifyAnnouncements;
