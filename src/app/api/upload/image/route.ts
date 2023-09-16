import { createImage } from "@/lib/db/image";
import { NextResponse } from "next/server";
import { extname } from "node:path";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import {
  checkAlbum,
  saveImage,
  validateFormData,
} from "@/lib/services/images/server-methods";

const { UPLOAD_DIR, UPLOAD_DIR_ALBUM } = process.env;

export async function POST(request: Request) {
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  const formData = await request.formData();
  const parsedData = Array.from(formData.entries());
  const { albumId, file } = validateFormData(parsedData);
  await checkAlbum(albumId);

  const imageEntity = await createImage(
    `${UPLOAD_DIR_ALBUM}/`,
    albumId,
    extname(file.name),
  );

  if (!imageEntity || !imageEntity.path)
    throw new Error("Something went wrong");
  await saveImage(await file.arrayBuffer(), imageEntity.path);
  revalidateTag(RevalidateTag.IMAGES);
  return NextResponse.json(imageEntity);
}
