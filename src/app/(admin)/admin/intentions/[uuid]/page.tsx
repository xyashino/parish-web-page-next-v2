import React from "react";
import { apiCall, convertIntentionsResponseToStoreData } from "@/lib/utils";
import notFound from "@/app/not-found";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { ModifyWeekIntentions } from "@/components/week-intentions/ModifyWeekIntentions";
import {
  ManyWeekIntentionsResponse,
  WeekIntentionsWithRelationsResponse,
} from "@/types/db/week-intentions";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

export async function generateStaticParams() {
  const intentions = await apiCall<ManyWeekIntentionsResponse>(
    ApiRoute.BASE_WEEK_INTENTIONS,
    {
      next: { tags: [RevalidateTag.INTENTIONS] },
    },
  );
  return intentions.map((intention) => ({
    uuid: intention.id,
  }));
}

const EditOneIntention = async ({ params: { uuid } }: any) => {
  const weekIntention = await apiCall<WeekIntentionsWithRelationsResponse>(
    `${ApiRoute.BASE_WEEK_INTENTIONS}/${uuid}`,
    {
      next: { tags: [RevalidateTag.INTENTIONS] },
    },
  );
  if (!weekIntention) return notFound();
  console.log(weekIntention);
  return (
    <AdminPageWrapper
      headerData={{
        title: `Edytujesz Intencje Parafialne "${uuid}"`,
      }}
    >
      <ModifyWeekIntentions
        defaultValue={convertIntentionsResponseToStoreData(weekIntention)}
      />
    </AdminPageWrapper>
  );
};
export default EditOneIntention;
