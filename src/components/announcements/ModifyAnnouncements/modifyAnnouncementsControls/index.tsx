import React, { SyntheticEvent } from "react";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { UpdateIcon } from "@radix-ui/react-icons";
import { CardHeaderWithSeparator } from "@/components/cards/CardHeaderWithSeparator";
import { Card, CardContent } from "@/components/ui/card";
import { ClearButtonWithAlert } from "./clearButtonWithAlert";
import { DeleteButtonWithAlert } from "./deleteButtonWithAlert";

interface Props {
  saveMethod: () => void;
  clearMethod: () => void;
  isEdit: boolean;
  deleteMethod: () => void;
}

export const ModifyAnnouncementsControls = ({
  saveMethod,
  clearMethod,
  deleteMethod,
  isEdit,
}: Props) => {
  const handleSave = (e: SyntheticEvent) => {
    e.preventDefault();
    saveMethod();
  };
  return (
    <Card className="w-11/12 mx-auto">
      <CardHeaderWithSeparator
        title="Zarządzaj ogłoszeniami"
        description="Na stronie głównej wyświetlane są tylko jede aktywne ogłoszenia. Które
        sa wybierane losowo."
      />
      <CardContent className="flex flex-col md:flex-row justify-around md:space-y-0 space-y-4 place-items-center md:space-x-12">
        <ClearButtonWithAlert onConfirm={clearMethod} />
        <ButtonWithIcon
          text="Zapisz"
          Icon={UpdateIcon}
          onClick={handleSave}
          className="w-full"
        />
        {isEdit && <DeleteButtonWithAlert onConfirm={deleteMethod} />}
      </CardContent>
    </Card>
  );
};
