import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { OneIntention } from "@/types/week-intentions-store";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import ReactMarkdown from "react-markdown";

interface Props {
  intentionData: OneIntention;
  id: string;
}

export const ModifyIntentionsRow = ({ intentionData, id }: Props) => {
  const { deleteIntention } = useWeekIntentionsStore();
  return (
    <TableRow>
      <TableCell>{intentionData.order}</TableCell>
      <TableCell className="font-bold">{intentionData.hour}</TableCell>
      <TableCell>
        <ReactMarkdown className="prose-sm max-w-none">
          {intentionData.value ?? ""}
        </ReactMarkdown>
      </TableCell>
      <TableCell className="grid place-items-center">
        <Button
          variant="ghost"
          onClick={() => deleteIntention(id)}
          role="button"
          className="group hover:bg-red-500  transition-colors"
        >
          <TrashIcon className="text-red-800 group-hover:text-background transition-colors" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
