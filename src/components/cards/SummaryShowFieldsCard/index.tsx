import React from "react";
import BaseCard from "@/components/cards/BaseCard";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { SummaryShowFieldCardTable } from "./summaryShowFieldCardTable";

type ObjectWithShow = { show: boolean };

interface Props<T extends ObjectWithShow> {
  values: T[];
  emptyArrayMessage: string;
  title: string;
}

const SummaryShowFieldsCard = <T extends ObjectWithShow>({
  values,
  emptyArrayMessage,
  title,
}: Props<T>) => {
  return (
    <BaseCard title={title} Icon={ChatBubbleIcon} className="select-none">
      {!values.length ? (
        <p className="uppercase font-bold">{emptyArrayMessage}</p>
      ) : (
        <SummaryShowFieldCardTable values={values} />
      )}
    </BaseCard>
  );
};

export default SummaryShowFieldsCard;
