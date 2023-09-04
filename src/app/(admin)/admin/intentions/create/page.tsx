import React from "react";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { ModifyWeekIntentions } from "@/components/week-intentions/ModifyWeekIntentions";

const IntentionsCreatePage = async () => (
  <>
    <PageTitleWithPrevBtn title="Dodajesz Intencje Parafialne" />
    <ModifyWeekIntentions />
  </>
);

export default IntentionsCreatePage;
