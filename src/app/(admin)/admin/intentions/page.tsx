import React from "react";
import { Navigation } from "@/types/enums";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { getManyWeekIntentions } from "@/lib/db/weekIntentions";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { WeekIntentionsDataTable } from "@/components/week-intentions/WeekIntentionsDataTable";

const IntentionsPage = async () => {
  const intentions = await getManyWeekIntentions();

  return (
    <div className="flex flex-col space-y-6 animate-fadeIn transition-opacity">
      <PageTitleWithPrevBtn title="Zarządzaj Intencjami parafialnymi" />
      <DashboardCardContainer>
        <SummaryStatusCard
          title="Podsumowanie Intencji"
          emptyArrayMessage="Brak Intencji Parafialnych"
          values={intentions}
        />
        <NavigationBtn
          href={Navigation.CREATE_INTENTIONS}
          buttonText="Dodaj Intencje"
        />
      </DashboardCardContainer>
      <WeekIntentionsDataTable data={intentions} />
    </div>
  );
};

export default IntentionsPage;
