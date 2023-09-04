import React from "react";
import { ModifyWeekIntentions } from "@/components/week-intentions/ModifyWeekIntentions";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

const IntentionsCreatePage = async () => (
  <>
    <AdminPageWrapper
      headerData={{
        title: "Dodajesz Intencje Parafialne",
      }}
      className="space-y-2"
    >
      <ModifyWeekIntentions />
    </AdminPageWrapper>
  </>
);

export default IntentionsCreatePage;
