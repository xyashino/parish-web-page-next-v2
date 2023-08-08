import React from "react";
import { Table, TableBody } from "@/components/ui/table";
import ModifyTableHeader from "@/components/week-intentions/ModifyWeekIntentions/modifyIntentionsTable/modifyIntetionsTableHeader";
import { OneIntention } from "@/types/interfaces/week-intentions-store.interface";
import ModifyIntentionTableRow from "@/components/week-intentions/ModifyWeekIntentions/modifyIntentionsTable/modifyIntentionsTableRow";

interface Props {
  intentions: OneIntention[];
}

const ModifyIntentionsTable = ({ intentions }: Props) => {
  return (
    <>
      <Table>
        <ModifyTableHeader />
        <TableBody>
          {intentions
            .sort((a, b) => a.order - b.order)
            .map((intention) => (
              <ModifyIntentionTableRow
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

export default ModifyIntentionsTable;
