import React from "react";

interface Props {
  value: boolean;
}

const DataTableBooleanCell = ({ value }: Props) => {
  const className = value ? "bg-green-700" : "bg-red-500";

  return (
    <span
      className={`px-2 py-1 select-none rounded-md text-white text-sm  uppercase font-bold ${className} mx-auto`}
    >
      {value ? "Tak" : "Nie"}
    </span>
  );
};

export default DataTableBooleanCell;
