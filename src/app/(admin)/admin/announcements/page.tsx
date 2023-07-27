import React from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import NavigationBtn from "@/components/navigation/NavigationBtn";
import AnnouncementsDataTable from "@/components/data-tables/AnnouncementsDataTable";
import { apiCall } from "@/lib/utils";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { Announcements } from "@prisma/client";
import { PageRoute } from "@/types/enums/page-route.enum";

const AnnouncementsPage = async () => {
  const announcements = await apiCall<Announcements[]>(
    ApiRoute.BASE_ANNOUNCEMENTS,
    {
      next: { tags: [RevalidateTag.ANNOUNCEMENTS] },
    }
  );

  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj ogłoszeniami parafialnymi" />
      <AnnouncementsDataTable data={announcements} />
      <NavigationBtn
        href={PageRoute.CREATE_ANNOUNCEMENT}
        buttonText="Dodaj ogłosznia"
      />
    </div>
  );
};

export default AnnouncementsPage;
