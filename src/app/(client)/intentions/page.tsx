import React from "react";
import { ImageTextSection } from "@/components/ImageTextSection";
import { getDateRange } from "@/lib/utils";
import { WeekIntentionsContent } from "@/components/week-intentions/WeekIntentionsContent";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions";

export const revalidate = 0;

export default async function Intentions() {
  const intentions = await WeekIntentionsDb.getActive();
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
