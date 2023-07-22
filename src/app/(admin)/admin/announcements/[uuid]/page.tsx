import React from "react";
import { Announcements } from "@prisma/client";
import notFound from "@/app/not-found";
import { getAnnouncements } from "@/lib/db/announcement";
import { apiCall } from "@/lib/utils";
import AdminPageTitle from "@/components/AdminPageTitle";
import ModifyAnnouncements from "@/components/ModifyAnnouncements";

export async function generateStaticParams() {
  const announcements = await getAnnouncements();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const EditAnnouncement = async ({ params: { uuid } }: ParamsWithUUID) => {
  const announcement = await apiCall<Announcements>(
    `/api/announcements/${uuid}`
  );
  if (!announcement) return notFound();

  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title={"Edytujesz Ogłoszenia o ID " + uuid} />
      <ModifyAnnouncements />
    </div>
  );
};

export default EditAnnouncement;
