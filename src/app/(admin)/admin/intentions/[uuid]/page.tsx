import React from "react";
import { convertIntentionsResponseToStoreData } from "@/lib/utils";
import { notFound } from "next/navigation";
import { ModifyWeekIntentions } from "@/components/week-intentions/ModifyWeekIntentions";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions";

export async function generateStaticParams() {
  const intentions = await WeekIntentionsDb.findAll();
  return intentions.map((intention) => ({
    uuid: intention.id,
  }));
}

const EditOneIntention = async ({ params: { uuid } }: ParamsWithUUID) => {
  const weekIntention = await WeekIntentionsDb.getOneWithRelations(uuid);
  if (!weekIntention) return notFound();

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
