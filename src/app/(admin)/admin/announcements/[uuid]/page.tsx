import React from "react";
import { apiCall } from "@/lib/utils";
import notFound from "@/app/not-found";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import {
  AnnouncementResponse,
  AnnouncementsResponse,
} from "@/types/db/announcement";

export async function generateStaticParams() {
  const announcements = await apiCall<AnnouncementsResponse>(
    ApiRoute.BASE_ANNOUNCEMENTS,
    {
      next: { tags: [RevalidateTag.ANNOUNCEMENTS] },
    },
  );
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const EditAnnouncement = async ({ params: { uuid } }: ParamsWithUUID) => {
  const announcement = await apiCall<AnnouncementResponse>(
    ApiRoute.BASE_ANNOUNCEMENTS,
    {
      next: { tags: [RevalidateTag.ANNOUNCEMENTS] },
    },
  );

  if (!announcement) return notFound();

  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title={"Edytujesz Ogłoszenia o ID " + uuid} />
      <ModifyAnnouncements defaultValue={announcement} />
    </div>
  );
};

export default EditAnnouncement;
