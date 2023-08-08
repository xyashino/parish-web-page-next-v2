import { z } from "zod";
import { Status, Weekday } from "@prisma/client";

export const weekCreateIntentionsValidator = z.object({
  status: z.nativeEnum(Status),
  endWeek: z.date().nullable(),
  startWeek: z.date().nullable(),
  days: z.array(
    z.object({
      day: z.nativeEnum(Weekday),
      dateOfDay: z.date().nullable(),
      intentions: z.array(
        z.object({
          value: z.string(),
          order: z.number().min(-20).max(20),
          hour: z.string(),
          dayId: z.string().nullable().optional(),
        })
      ),
      weekId: z.string().nullable().optional(),
    })
  ),
});

export const weekUpdateIntentionsValidator = z.object({
  ...weekCreateIntentionsValidator.shape,
  status: z.nativeEnum(Status).optional(),
});

export type WeekCreateIntentionsValidator = z.infer<
  typeof weekCreateIntentionsValidator
>;
