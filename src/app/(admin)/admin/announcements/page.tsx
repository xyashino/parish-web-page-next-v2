import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { apiCall } from "@/lib/utils";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { Announcements } from "@prisma/client";
import { Navigation } from "@/types/enums/navigation.enum";
import { AnnouncementsDataTable } from "@/components/announcements/AnnouncementsDataTable";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";

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
      <div className="w-5/6 mx-auto flex justify-around items-center mb-4">
        <SummaryStatusCard
          title="Podsumowanie Ogłoszeń"
          emptyArrayMessage="Brak Ogłoszeń"
          values={announcements}
        />
        <NavigationBtn
          href={Navigation.CREATE_ANNOUNCEMENT}
          buttonText="Dodaj ogłosznia"
        />
      </div>
      <AnnouncementsDataTable data={announcements} />
    </div>
  );
};

export default AnnouncementsPage;
