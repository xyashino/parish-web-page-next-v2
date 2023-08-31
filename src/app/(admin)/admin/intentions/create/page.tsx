import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { ModifyWeekIntentions } from "@/components/week-intentions/ModifyWeekIntentions";

const IntentionsCreatePage = async () => (
  <>
    <AdminPageTitle title="Dodajesz Intencje Parafialne" />
    <ModifyWeekIntentions />
  </>
);

export default IntentionsCreatePage;
