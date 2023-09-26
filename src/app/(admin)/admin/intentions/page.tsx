import React from "react";
import { Navigation } from "@/types/enums";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { WeekIntentionsDataTable } from "@/components/week-intentions/WeekIntentionsDataTable";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions";

export const revalidate = 0;

const IntentionsPage = async () => {
  const intentions = await WeekIntentionsDb.findAll();

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
