import React from "react";
import { notFound } from "next/navigation";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { AnnouncementDb } from "@/db/handlers/announcement";

export const revalidate = 0;

export async function generateStaticParams() {
  const announcements = await AnnouncementDb.findAll();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const EditAnnouncement = async ({ params: { uuid } }: ParamsWithUUID) => {
  const announcement = await AnnouncementDb.findOne(uuid);

  if (!announcement) return notFound();

  return (
    <AdminPageWrapper
      headerData={{
        title: `Edytujesz ogłoszenie o ID: "${uuid}"`,
      }}
    >
      <ModifyAnnouncements defaultValue={announcement} />
    </AdminPageWrapper>
  );
};

export default EditAnnouncement;
