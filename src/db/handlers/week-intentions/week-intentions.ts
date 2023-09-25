import { intentionTable, weekIntentionsTable } from "@/db/schema";
import {
  CreateDay,
  CreateWeekIntentions,
  WeekIntentionsResponse,
} from "@/types/db/week-intentions";
import { DefaultCrud } from "@/db/handlers/default";
import { asc, eq } from "drizzle-orm";
import { DayDb } from "@/db/handlers/week-intentions/day";
import { dateSchema, uuidSchema } from "@/lib/schemas/default";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

const createWeekIntentionsSchema = z.object({
  ...createInsertSchema(weekIntentionsTable).shape,
  startWeek: dateSchema,
  endWeek: dateSchema,
});

class WeekIntentions extends DefaultCrud<typeof weekIntentionsTable> {
  constructor() {
    super(weekIntentionsTable, createWeekIntentionsSchema);
  }

  async getActive(): Promise<WeekIntentionsResponse> {
    const { db, withErrorHandling } = this;
    return withErrorHandling(async () => {
      return await db.query.weekIntentionsTable.findFirst({
        where: eq(weekIntentionsTable.status, "ACTIVE"),
        with: {
          days: {
            with: {
              intentions: {
                orderBy: asc(intentionTable.order),
              },
            },
          },
        },
      });
    });
  }

  async getOneWithRelations(id: string): Promise<WeekIntentionsResponse> {
    const { db, model, withErrorHandling } = this;
    return withErrorHandling(
      async () =>
        await db.query.weekIntentionsTable.findFirst({
          where: eq(model.id, id),
          with: {
            days: {
              with: {
                intentions: {
                  orderBy: asc(intentionTable.order),
                },
              },
            },
          },
        }),
    );
  }

  async findALlWithRelations(): Promise<WeekIntentionsResponse[]> {
    const { db } = this;
    return db.query.weekIntentionsTable.findMany({
      with: {
        days: {
          with: {
            intentions: {
              orderBy: asc(intentionTable.order),
            },
          },
        },
      },
    });
  }

  override async create({
    days,
    ...rest
  }: CreateWeekIntentions): Promise<WeekIntentionsResponse> {
    const { db, model, withErrorHandling } = this;
    return withErrorHandling(async () => {
      const parsedData = createWeekIntentionsSchema.parse(rest);
      const [result] = await db.insert(model).values(parsedData).returning();

      const weekId = result.id;
      await this.createDays(weekId, days);
      return result;
    });
  }

  override async update(id: string, data: CreateWeekIntentions) {
    const { db, model, withErrorHandling, insertSchema, createDays } = this;
    return withErrorHandling(async () => {
      const { uuid } = uuidSchema.parse({ uuid: id });
      const parsedData = insertSchema.parse(data);

      const [result] = await db
        .update(model)
        .set(parsedData)
        .where(eq(model.id, uuid))
        .returning();
      const weekId = result.id;

      await DayDb.deleteByWeekId(weekId);
      await createDays(weekId, data.days);
      return result;
    });
  }

  private async createDays(weekId: string, days: CreateDay[]) {
    for (const day of days) {
      const result = await DayDb.create({ ...day, weekId });
      console.log({ test: result });
    }
  }
}

export const WeekIntentionsDb = new WeekIntentions();
