import React from "react";
import { getManyWeekIntentions } from "@/lib/db/weekIntentions";
import { apiCall } from "@/lib/utils";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";
import notFound from "@/app/not-found";
import { ModifyWeekIntentions } from "@/components/week-intentions/ModifyWeekIntentions";
import { ApiRoute } from "@/types/enums";

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
    <div className="flex flex-col space-y-6 p-4 rounded-xl lg:w-11/12 mx-auto">
      <AdminPageTitle title={"Edytujesz Intencje o ID" + uuid} />
      <ModifyWeekIntentions defaultValue={weekIntention} />
    </div>
  );
};
export default EditOneIntention;
