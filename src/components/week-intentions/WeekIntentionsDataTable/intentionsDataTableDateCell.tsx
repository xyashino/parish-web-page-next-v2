import React from "react";

interface Props {
  value: string | null;
}

export const IntentionsDataTableDateCell = ({ value }: Props) => {
  if (!value)
    return (
      <span className="py-1 px-2 uppercase text-white bg-zinc-900 rounded-sm font-bold">
        Brak
      </span>
    );
  const dateObj = new Date(Date.parse(value));
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <span className="py-1 px-2 uppercase text-white bg-zinc-900 rounded-sm font-bold italic">
      {formattedDate}
    </span>
  );
};
