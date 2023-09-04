import React from "react";
import { Table, TableBody } from "@/components/ui/table";
import { ModifyTableHeader } from "./modifyIntetionsTableHeader";
import { OneIntention } from "@/types/week-intentions-store";
import { ModifyIntentionsRow } from "./modifyIntentionsTableRow";

interface Props {
  intentions: OneIntention[];
}

export const ModifyIntentionsTable = ({ intentions }: Props) => {
  return (
    <>
      <Table>
        <ModifyTableHeader />
        <TableBody>
          {intentions
            .sort((a, b) => a.order - b.order)
            .map((intention) => (
              <ModifyIntentionsRow
                intentionData={intention}
                key={intention.id}
                id={intention.id}
              />
            ))}
        </TableBody>
      </Table>
    </>
  );
};
