import React from "react";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { ModifyAnnouncements } from "@/components/announcements/ModifyAnnouncements";

const AnnouncementsCreatePage = async () => (
  <div className="flex flex-col space-y-6">
    <PageTitleWithPrevBtn title="Dodajesz Ogłoszenia Parafialne" />
    <ModifyAnnouncements />
  </div>
);

export default AnnouncementsCreatePage;
