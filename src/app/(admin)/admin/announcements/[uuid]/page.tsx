import React from "react";
import notFound from "@/app/not-found";
import { getAnnouncement, getAnnouncements } from "@/lib/db/announcement";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";

export async function generateStaticParams() {
  const announcements = await getAnnouncements();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const EditAnnouncement = async ({ params: { uuid } }: ParamsWithUUID) => {
  const announcement = await getAnnouncement(uuid);
  if (!announcement) return notFound();

  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title={"Edytujesz Ogłoszenia o ID " + uuid} />
      <ModifyAnnouncements defaultValue={announcement} />
    </div>
  );
};

export default EditAnnouncement;
