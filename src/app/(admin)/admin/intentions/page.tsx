import React from "react";
import { ApiRoute, Navigation, RevalidateTag } from "@/types/enums";
import { SummaryStatusCard } from "@/components/cards/SummaryStatusCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { NavigationBtn } from "@/components/navigation/NavigationBtn";
import { WeekIntentionsDataTable } from "@/components/week-intentions/WeekIntentionsDataTable";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { apiCall } from "@/lib/utils";
import { WeekIntentionsResponse } from "@/types/db/week-intentions";

const IntentionsPage = async () => {
  const intentions = await apiCall<WeekIntentionsResponse>(
    ApiRoute.BASE_WEEK_INTENTIONS,
    {
      next: { tags: [RevalidateTag.INTENTIONS] },
    },
  );

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
