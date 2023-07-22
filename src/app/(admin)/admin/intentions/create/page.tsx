import React from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import ModifyIntentions from "@/components/ModifyWeekIntentions";

const IntentionsCreatePage = async () => {
  return (
    <div className="flex flex-col space-y-6 p-4 rounded-xl mx-auto">
      <AdminPageTitle title="Dodajesz Intencje Parafialne" />
      <ModifyIntentions />
    </div>
  );
};

export default IntentionsCreatePage;
