import { DefaultCrud } from "@/db/handlers/default";
import { eq } from "drizzle-orm";
import { announcementTable } from "@/db/schema";

class AnnouncementCrud extends DefaultCrud<typeof announcementTable> {
  constructor() {
    super(announcementTable);
  }

  async getActive() {
    const { model, db, withErrorHandling } = this;

    return withErrorHandling(async () => {
      const [result] = await db
        .select()
        .from(model)
        .where(eq(model.status, "ACTIVE"));
      return result;
    });
  }
}

export const AnnouncementDb = new AnnouncementCrud();
