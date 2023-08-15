import React from "react";
import { Navigation } from "@/types/enums";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { getManyWeekIntentions } from "@/lib/db/weekIntentions";
import { NavigationBtn } from "@/components/navigation";
import { WeekIntentionsDataTable } from "@/components/week-intentions";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";

const IntentionsPage = async () => {
  const intentions = await getManyWeekIntentions();
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj Intencjami parafialnymi" />
      <div className="w-5/6 mx-auto flex justify-around items-center mb-4">
        <SummaryStatusCard
          title="Podsumowanie Intencji"
          emptyArrayMessage="Brak Intencji Parafialnych"
          values={intentions}
        />
        <NavigationBtn
          href={Navigation.CREATE_INTENTIONS}
          buttonText="Dodaj Intencje"
        />
      </div>
      <WeekIntentionsDataTable data={intentions} />
    </div>
  );
};

export default IntentionsPage;
