import React from "react";
import { Status } from "@prisma/client";
import BaseCard from "@/components/cards/BaseCard";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { SummaryStatusCardTable } from "./summaryStatusCardTable";

type ObjectWithStatus = { status: Status };

interface Props<T extends ObjectWithStatus> {
  values: T[];
  emptyArrayMessage: string;
  title: string;
}

const SummaryStatusCard = <T extends ObjectWithStatus>({
  values,
  emptyArrayMessage,
  title,
}: Props<T>) => {
  return (
    <BaseCard title={title} Icon={ChatBubbleIcon} className="select-none">
      {!values.length ? (
        <p className="uppercase font-bold">{emptyArrayMessage}</p>
      ) : (
        <SummaryStatusCardTable values={values} />
      )}
    </BaseCard>
  );
};

export default SummaryStatusCard;
