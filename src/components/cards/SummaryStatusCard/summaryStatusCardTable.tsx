import React from "react";
import { Status } from "@prisma/client";
import { getLengthByEnumStatus } from "@/lib/utils";

interface Props {
  values: { status: Status }[];
}

export const SummaryStatusCardTable = ({ values }: Props) => (
  <table className="border-collapse table-auto border-spacing-x-1 border-spacing-y-4">
    <tbody>
      <tr className="border-muted p-2">
        <th className="text-left text-green-700">Aktywne:</th>
        <td className="pl-2 font-bold">
          {getLengthByEnumStatus(values, Status.ACTIVE)}
        </td>
      </tr>

      <tr className="border-muted p-2">
        <th className="text-left text-yellow-600">Oczekujące:</th>
        <td className="text-right font-bold">
          {getLengthByEnumStatus(values, Status.UPCOMING)}
        </td>
      </tr>

      <tr className="border-muted p-2">
        <th className="text-left text-red-800">Bez Statusu:</th>
        <td className="text-right font-bold">
          {getLengthByEnumStatus(values, Status.NONE)}
        </td>
      </tr>

      <tr className="border-t-slate-300 border-t-2 p-2">
        <th className="text-left">Razem:</th>
        <td className="text-right font-bold">{values.length}</td>
      </tr>
    </tbody>
  </table>
);
