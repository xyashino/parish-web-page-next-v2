import { DefaultCrud } from "@/db/handlers/default";
import { dayTable } from "@/db/schema";
import { CreateDay } from "@/types/db/week-intentions";
import { IntentionDb } from "@/db/handlers/week-intentions/intention";
import { eq } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { dateSchema } from "@/lib/schemas/default";
import { z } from "zod";

const createDaySchema = z.object({
  ...createInsertSchema(dayTable).shape,
  dateOfDay: dateSchema,
});

class Day extends DefaultCrud<typeof dayTable> {
  constructor() {
    super(dayTable, createDaySchema);
  }

  override async create({ intentions, ...rest }: CreateDay) {
    const { db, model, withErrorHandling } = this;
    return withErrorHandling(async () => {
      const parsedData = createDaySchema.parse(rest);
      const [result] = await db.insert(model).values(parsedData).returning();
      const datId = result.id;
      for (const intention of intentions) {
        await IntentionDb.create({ ...intention, dayId: datId });
      }
      return result;
    });
  }

  async deleteByWeekId(weekId: string) {
    const { db, model, withErrorHandling } = this;
    return withErrorHandling(async () => {
      return db.delete(model).where(eq(model.weekId, weekId));
    });
  }
}

export const DayDb = new Day();
