import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";
const AnnouncementsCreatePage = async () => {
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Dodajesz Ogłoszenia Parafialne" />
      <ModifyAnnouncements />
    </div>
  );
};

export default AnnouncementsCreatePage;
