import React, { SyntheticEvent } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { OneIntention } from "@/types/interfaces/week-intentions-store.interface";
import useWeekIntentionsStore from "@/lib/store/useWeekIntentionsStore";
import { Button } from "@/components/ui/button";
interface Props {
  intentionData: OneIntention;
  id: string;
}

const ModifyIntentionsRow = ({ intentionData, id }: Props) => {
  const { deleteIntention } = useWeekIntentionsStore();

  return (
    <TableRow>
      <TableCell>{intentionData.zIndex}</TableCell>
      <TableCell className="font-bold">{intentionData.hour}</TableCell>
      <TableCell>{intentionData.value}</TableCell>
      <TableCell className="flex flex-col items-end justify-center">
        <Button
          variant="destructive"
          onClick={() => deleteIntention(id)}
          role="button"
        >
          <DeleteIcon className="text-3xl text-background" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default ModifyIntentionsRow;
