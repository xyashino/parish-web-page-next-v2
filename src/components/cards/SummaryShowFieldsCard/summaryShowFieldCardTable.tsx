import React from "react";
import { getLengthByShow } from "@/lib/utils";

interface Props {
  values: { show: boolean }[];
}

export const SummaryShowFieldCardTable = ({ values }: Props) => {
  const { trueValues, falseValues } = getLengthByShow(values);

  return (
    <table className="border-collapse table-auto border-spacing-x-1 border-spacing-y-4">
      <tbody>
        <tr className="border-muted p-2">
          <th className="text-left text-green-700">Aktywne:</th>
          <td className="pl-2 font-bold">{trueValues}</td>
        </tr>

        <tr className="border-muted p-2">
          <th className="text-left text-red-800">Nieaktywne:</th>
          <td className="text-right font-bold">{falseValues}</td>
        </tr>

        <tr className="border-t-slate-300 border-t-2 p-2">
          <th className="text-left">Razem:</th>
          <td className="text-right font-bold">{values.length}</td>
        </tr>
      </tbody>
    </table>
  );
};
