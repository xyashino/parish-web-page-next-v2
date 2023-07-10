import React from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import { getManyWeekIntentions } from "@/lib/prisma/weekIntentions";
import NavigationBtn from "@/components/navigation/NavigationBtn";
import IntentionsDataTable from "@/components/data-tables/IntentionsDataTable";

const IntentionsPage = async () => {
  const intentions = await getManyWeekIntentions();
  console.log(intentions);
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj Intencjami parafialnymi" />
      <IntentionsDataTable data={intentions} />
      <NavigationBtn
        href="/admin/intentions/create"
        buttonText="Dodaj Intencje"
      />
    </div>
  );
};

export default IntentionsPage;
