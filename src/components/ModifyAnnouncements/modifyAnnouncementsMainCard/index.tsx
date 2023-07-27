import React from "react";
import MdEditor from "@/components/MdEditor";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import CardHeaderWithSeparator from "@/components/CardHeaderWithSeparator";

import { AnnouncementsInputsFields } from "./announcementsInputsFields";

import {
  AnnouncementsData,
  UpdateAnnouncementData,
} from "@/types/announcement-edit.types";

interface Props {
  data: AnnouncementsData;
  updateMethod: (a: UpdateAnnouncementData) => void;
}

const ModifyAnnouncementsMainCard = (props: Props) => {
  return (
    <Card className="w-11/12 mx-auto">
      <CardHeaderWithSeparator
        title="Ogłoszenia Parafialne"
        description="Tworzysz/edytujesz ogłoszenia parafialne. Pamietaj, żeby nie zapomnieć o zapisaniu zmian!"
      />
      <CardContent>
        <AnnouncementsInputsFields {...props} />
        <Separator className="w-5/6 my-4" />
        <MdEditor editorHeight="600px" />
      </CardContent>
    </Card>
  );
};

export default ModifyAnnouncementsMainCard;
