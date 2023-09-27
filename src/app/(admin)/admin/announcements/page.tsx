import React from "react";
import { Navigation } from "@/types/enums";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { AnnouncementsDataTable } from "@/components/announcements/AnnouncementsDataTable";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { AnnouncementDb } from "@/db/handlers/announcement";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const AnnouncementsPage = async () => {
  const announcements = await AnnouncementDb.findAll();

  return (
    <AdminPageWrapper
      headerData={{
        title: "Zarządzaj ogłoszeniami parafialnymi",
      }}
    >
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
    </AdminPageWrapper>
  );
};

export default AnnouncementsPage;
