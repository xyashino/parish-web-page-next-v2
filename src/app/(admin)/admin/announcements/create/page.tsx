import React from "react";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

const AnnouncementsCreatePage = async () => (
  <AdminPageWrapper
    headerData={{
      title: "Dodajesz Ogłoszenia Parafialne",
    }}
  >
    <ModifyAnnouncements />
  </AdminPageWrapper>
);

export default AnnouncementsCreatePage;
