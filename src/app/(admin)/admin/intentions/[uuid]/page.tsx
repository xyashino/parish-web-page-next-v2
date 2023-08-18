import React from "react";
import { getManyWeekIntentions } from "@/lib/db/weekIntentions";
import { apiCall } from "@/lib/utils";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";
import notFound from "@/app/not-found";
import { ApiRoute } from "@/types/enums";
import { ModifyWeekIntentions } from "@/components/week-intentions";

export async function generateStaticParams() {
  const intentions = await getManyWeekIntentions();
  return intentions.map((intention) => ({
    uuid: intention.id,
  }));
}

const EditOneIntention = async ({ params: { uuid } }: any) => {
  const weekIntention = await apiCall<WeekIntentionsStoreData>(
    `${ApiRoute.BASE_WEEK_INTENTIONS}/${uuid}`
  );
  if (!weekIntention) return notFound();
  return (
    <>
      <AdminPageTitle title={"Edytujesz Intencje o ID" + uuid} />
      <ModifyWeekIntentions defaultValue={weekIntention} />
    </>
  );
};
export default EditOneIntention;
