import React from "react";

interface Props {
  value: string | null;
}

const IntentionsDataTableDateCell = ({ value }: Props) => {
  if (!value) return <span className="font-bold uppercase italic">Brak</span>;

  const dateObj = new Date(Date.parse(value));
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return <span>{formattedDate}</span>;
};

export default IntentionsDataTableDateCell;
