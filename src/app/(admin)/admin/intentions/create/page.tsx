import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { ModifyWeekIntentions } from "@/components/week-intentions";

const IntentionsCreatePage = async () => {
  return (
    <div className="flex flex-col space-y-6 p-4 rounded-xl mx-auto">
      <AdminPageTitle title="Dodajesz Intencje Parafialne" />
      <ModifyWeekIntentions />
    </div>
  );
};

export default IntentionsCreatePage;
