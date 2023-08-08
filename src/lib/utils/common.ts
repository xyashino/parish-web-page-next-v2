import { Status } from "@prisma/client";

export const getLengthByEnumStatus = <T extends { status: Status }>(
  values: T[],
  status: Status
) => values.filter((values) => values.status === status).length;

export const getLengthByShow = <T extends { show: boolean }>(values: T[]) => {
  const trueValues = values.filter((values) => values.show).length;
  const falseValues = values.length - trueValues;
  return { trueValues, falseValues };
};
