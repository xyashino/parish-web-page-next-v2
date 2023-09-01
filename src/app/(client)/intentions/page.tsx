import React from "react";
import { ImageTextSection } from "@/components/ImageTextSection";
import { getActiveWeekIntentions } from "@/lib/db/weekIntentions";
import { WeekIntentionsContent } from "@/components/week-intentions/WeekIntentionsContent";

const getDateRange = (startDate: Date | null, endDate: Date | null) => {
  if (!startDate || !endDate) return "";
  const start = new Date(startDate).toLocaleDateString("pl-PL");
  const end = new Date(endDate).toLocaleDateString("pl-PL");
  return `${start} - ${end}`;
};

export default async function Announcement() {
  const data = await getActiveWeekIntentions();
  if (!data) return <div>null</div>;
  const { days } = data;

  return (
    <div className="my-4">
      <ImageTextSection
        src="/intencje.webp"
        alt="Some hands"
        title="Intencje Parafialne"
        subtitle={getDateRange(data.startWeek, data.endWeek)}
      />
      <div className="bg-white p-4 rounded-2xl shadow-xl">
        <WeekIntentionsContent days={days} />
      </div>
    </div>
  );
}
