import { DefaultCrud } from "@/db/handlers/default";
import { imageTable } from "@/db/schema";

class Image extends DefaultCrud<typeof imageTable> {
  constructor() {
    super(imageTable);
  }
}

export const ImageDb = new Image();
