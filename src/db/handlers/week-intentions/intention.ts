import { DefaultCrud } from "@/db/handlers/default";
import { intentionTable } from "@/db/schema";

class Intention extends DefaultCrud<typeof intentionTable> {
  constructor() {
    super(intentionTable);
  }
}

export const IntentionDb = new Intention();
