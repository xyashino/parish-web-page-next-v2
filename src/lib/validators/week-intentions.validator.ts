import { z } from "zod";
import { Status, Weekday } from "@prisma/client";

const DateStringSchema = z
  .string()
  .optional()
  .nullable()
  .transform((value) => {
    if (value === null || value === undefined) return value;
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    return date;
  });

export const weekIntentionsValidator = z.object({
  status: z.nativeEnum(Status),
  endWeek: DateStringSchema,
  startWeek: DateStringSchema,
  days: z.array(
    z.object({
      day: z.nativeEnum(Weekday),
      dateOfDay: DateStringSchema,
      intentions: z.array(
        z.object({
          value: z.string(),
          order: z.number().min(-20).max(20),
          hour: z.string(),
          dayId: z.string().nullable().optional(),
        }),
      ),
      weekId: z.string().nullable().optional(),
    }),
  ),
});

export const weekUpdateIntentionsValidator = z.object({
  ...weekIntentionsValidator.shape,
  status: z.nativeEnum(Status).optional(),
});
