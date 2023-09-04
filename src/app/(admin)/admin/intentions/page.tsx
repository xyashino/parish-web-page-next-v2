import React from "react";
import { Navigation } from "@/types/enums";
import { getManyWeekIntentions } from "@/lib/db/weekIntentions";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { WeekIntentionsDataTable } from "@/components/week-intentions/WeekIntentionsDataTable";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

const IntentionsPage = async () => {
  const intentions = await getManyWeekIntentions();

  return (
    <AdminPageWrapper
      headerData={{
        title: "Zarządzaj Intencjami parafialnymi",
      }}
    >
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
    </AdminPageWrapper>
  );
};

export default IntentionsPage;
