export const getDateRange = (
  startDate?: string | null,
  endDate?: string | null,
) => {
  if (!startDate || !endDate) return "";
  const start = new Date(startDate).toLocaleDateString("pl-PL");
  const end = new Date(endDate).toLocaleDateString("pl-PL");
  return `${start} - ${end}`;
};

export const getInputDateValue = (date?: string | null | Date) =>
  date ? new Date(date).toISOString().slice(0, 10) : "";
