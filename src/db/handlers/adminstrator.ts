import { DefaultCrud } from "@/db/handlers/default";
import { AdministratorResponse } from "@/types/db/administrator";
import { adminTable } from "@/db/schema";
import { emailSchema } from "@/lib/schemas/default";
import { eq } from "drizzle-orm";

class AdministratorCrud extends DefaultCrud<typeof adminTable> {
  constructor() {
    super(adminTable);
  }

  async findOneByEmail(email: string) {
    const { withErrorHandling, db } = this;
    return withErrorHandling(async () => {
      const { email: parsedEmail } = emailSchema.parse({ email });
      const [result] = await db
        .select()
        .from(adminTable)
        .where(eq(adminTable.email, parsedEmail));
      return result as AdministratorResponse;
    });
  }
}

export const AdministratorDb = new AdministratorCrud();
