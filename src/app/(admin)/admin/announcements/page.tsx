import React from "react";
import { Announcements } from "@prisma/client";
import { ApiRoute, Navigation, RevalidateTag } from "@/types/enums";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { apiCall } from "@/lib/utils";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { AnnouncementsDataTable } from "@/components/announcements/AnnouncementsDataTable";

const AnnouncementsPage = async () => {
  const announcements = await apiCall<Announcements[]>(
    ApiRoute.BASE_ANNOUNCEMENTS,
    {
      next: { tags: [RevalidateTag.ANNOUNCEMENTS] },
    },
  );

  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj ogłoszeniami parafialnymi" />
      <DashboardCardContainer>
        <SummaryStatusCard
          title="Podsumowanie Ogłoszeń"
          emptyArrayMessage="Brak Ogłoszeń"
          values={announcements}
        />
        <NavigationBtn
          href={Navigation.CREATE_ANNOUNCEMENT}
          buttonText="Dodaj ogłosznia"
        />
      </DashboardCardContainer>
      <AnnouncementsDataTable data={announcements} />
    </div>
  );
};

export default AnnouncementsPage;
