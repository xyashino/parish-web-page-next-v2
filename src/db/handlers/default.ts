import { db } from "@/db/client";
import { createInsertSchema } from "drizzle-zod";
import { eq, InferInsertModel } from "drizzle-orm";
import { uuidSchema } from "@/lib/schemas/default";
import { PgTable } from "drizzle-orm/pg-core";

export class DefaultCrud<T extends PgTable> {
  protected db = db;

  constructor(
    protected model: T,
    protected insertSchema: ReturnType<
      typeof createInsertSchema
    > = createInsertSchema(model),
  ) {}

  protected async withErrorHandling<R, D = null>(
    fn: () => Promise<R>,
    defaultValue: D = null as unknown as D,
  ): Promise<R | D> {
    try {
      return await fn();
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }

  async create(data: InferInsertModel<T>): Promise<T["$inferSelect"] | null> {
    const { withErrorHandling, db, model, insertSchema } = this;
    return withErrorHandling(async () => {
      const parsedData = insertSchema.parse(data);
      const [result] = (await db
        .insert(model)
        .values(parsedData)
        .returning()) as unknown[];
      return result as T["$inferSelect"];
    });
  }

  async update<Type>(
    id: string,
    data: InferInsertModel<T>,
  ): Promise<T["$inferSelect"] | null> {
    const { withErrorHandling, db, model, insertSchema } = this;
    return withErrorHandling(async () => {
      const { uuid } = uuidSchema.parse({ uuid: id });
      if (!("id" in model)) throw new Error("Model does not have an id column");
      const parsedData = insertSchema.parse(data);
      const [result] = (await db
        .update(model)
        .set(parsedData)
        .where(eq(model.id as any, uuid))
        .returning()) as unknown[];
      return result as T["$inferSelect"];
    });
  }

  async delete(id: string): Promise<T["$inferSelect"] | null> {
    const { withErrorHandling, db, model } = this;

    return withErrorHandling(async () => {
      if (!("id" in model)) throw new Error("Model does not have an id column");
      const { uuid } = uuidSchema.parse({ uuid: id });
      const [result] = (await db
        .delete(model)
        .where(eq(model.id as any, uuid))
        .returning()) as unknown[];
      return result as T["$inferSelect"];
    });
  }

  async findOne(id: string): Promise<T["$inferSelect"] | null> {
    const { withErrorHandling, db, model } = this;
    return withErrorHandling(async () => {
      if (!("id" in model)) throw new Error("Model does not have an id column");

      const { uuid } = uuidSchema.parse({ uuid: id });
      const [result] = (await db
        .select()
        .from(model)
        .where(eq(model.id as any, uuid))) as unknown[];

      return result as T["$inferSelect"];
    });
  }

  async findAll<Type>(): Promise<T["$inferSelect"][]> {
    const { withErrorHandling, db, model } = this;

    return withErrorHandling(async () => {
      const result = (await db.select().from(model)) as unknown[];
      return result as T["$inferSelect"][];
    }, []);
  }
}
