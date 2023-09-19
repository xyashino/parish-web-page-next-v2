import React from "react";
import { ImageTextSection } from "@/components/ImageTextSection";
import { apiCall, getDateRange } from "@/lib/utils";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { WeekIntentionsWithRelationsResponse } from "@/types/db/week-intentions";
import { WeekIntentionsContent } from "@/components/week-intentions/WeekIntentionsContent";

export default async function Intentions() {
  const intentions = await apiCall<WeekIntentionsWithRelationsResponse>(
    ApiRoute.ACTIVE_WEEK_INTENTION,
    {
      next: { tags: [RevalidateTag.INTENTIONS] },
    },
  );
  return (
    <div className="my-4 animate-fadeIn">
      <ImageTextSection
        src="/images/intencje.webp"
        alt="Some hands"
        title="Intencje Parafialne"
        subtitle={getDateRange(intentions?.startWeek, intentions?.endWeek)}
      />
      <div className="bg-white p-4 rounded-2xl shadow-xl">
        {intentions && intentions.days.length > 0 ? (
          <WeekIntentionsContent days={intentions.days} />
        ) : (
          <h3 className="text-3xl text-foreground text-center uppercase italic font-light">
            Spróbuj ponownie później
          </h3>
        )}
      </div>
    </div>
  );
}
