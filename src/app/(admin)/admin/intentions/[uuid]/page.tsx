import React from "react";
import { getManyWeekIntentions } from "@/lib/db/weekIntentions";
import { apiCall } from "@/lib/utils";
import AdminPageTitle from "@/components/AdminPageTitle";
import ModifyIntentions from "@/components/ModifyWeekIntentions";
import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";
import notFound from "@/app/not-found";

export async function generateStaticParams() {
  const intentions = await getManyWeekIntentions();
  return intentions.map((intention) => ({
    uuid: intention.id,
  }));
}

const EditOneIntention = async ({ params: { uuid } }: any) => {
  const weekIntention = await apiCall<WeekIntentionsStoreData>(
    `/api/intentions/${uuid}`
  );
  if (!weekIntention) return notFound();
  return (
    <div className="flex flex-col space-y-6 p-4 rounded-xl lg:w-11/12 mx-auto">
      <AdminPageTitle title={"Edytujesz Intencje o ID" + uuid} />
      <ModifyIntentions defaultValue={weekIntention} />
    </div>
  );
};
export default EditOneIntention;
