import React from "react";
import { apiCall } from "@/lib/utils";
import { notFound } from "next/navigation";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import {
  AnnouncementResponse,
  AnnouncementsResponse,
} from "@/types/db/announcement";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

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
