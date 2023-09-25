import React from "react";
import { cn } from "@/lib/utils";
import { Status } from "@/types/db/enums";

const getStatusColor = (
  status: Status,
): {
  className: string;
  text: string;
} => {
  switch (status) {
    case "ACTIVE":
      return {
        className: "bg-green-700",
        text: "Aktywny",
      };
    case "UPCOMING":
      return {
        className: "bg-yellow-700",
        text: "Oczekujący",
      };
    case "NONE":
      return {
        className: "bg-red-500",
        text: "Brak",
      };
  }
};

interface Props {
  status: any;
}

export const DataTableStatusCell = ({ status }: Props) => {
  const { className, text } = getStatusColor(status);
  const spanClasses = cn(
    "px-2 py-1 select-none rounded-md text-white text-xs  uppercase font-bold shadow-sm",
    className,
  );
  return <span className={spanClasses}>{text} </span>;
};
