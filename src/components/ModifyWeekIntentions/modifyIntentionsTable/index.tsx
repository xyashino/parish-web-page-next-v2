import React from "react";
import { Table, TableBody } from "@/components/ui/table";
import ModifyTableHeader from "@/components/ModifyWeekIntentions/modifyIntentionsTable/modifyIntetionsTableHeader";
import { OneIntention } from "@/types/interfaces/week-intentions-store.interface";
import ModifyIntentionTableRow from "@/components/ModifyWeekIntentions/modifyIntentionsTable/modifyIntentionsTableRow";

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
            .sort((a, b) => a.zIndex - b.zIndex)
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
