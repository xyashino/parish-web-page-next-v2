import React from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import NavigationBtn from "@/components/navigation/NavigationBtn";
import { getAnnouncements } from "@/lib/prisma/announcement";
import AnnouncementsDataTable from "@/components/data-tables/AnnouncementsDataTable";

const AnnouncementsPage = async () => {
  const announcements = await getAnnouncements();
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj ogłoszeniami parafialnymi" />
      <AnnouncementsDataTable data={announcements} />
      <NavigationBtn
        href="/admin/announcements/create"
        buttonText="Dodaj ogłosznia"
      />
    </div>
  );
};

export default AnnouncementsPage;
