import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { ModifyWeekIntentions } from "@/components/week-intentions";

const IntentionsCreatePage = async () => {
  return (
    <>
      <AdminPageTitle title="Dodajesz Intencje Parafialne" />
      <ModifyWeekIntentions />
    </>
  );
};

export default IntentionsCreatePage;
