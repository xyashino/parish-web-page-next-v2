import { NextResponse } from "next/server";
import { extname } from "node:path";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  checkAlbum,
  saveImage,
  validateFormData,
} from "@/lib/services/images/server-methods";
import { ServerErrorResponse } from "@/lib/next-responses";
import { ImageDb } from "@/db/handlers/album";
import { randomUUID } from "node:crypto";
import { join } from "path";
import { env } from "@/config/env/server";
import { RevalidatePath } from "@/types/enums/revalidate-path";

const { UPLOAD_DIR, UPLOAD_DIR_ALBUMS } = env;

export async function POST(request: Request) {
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  const formData = await request.formData();
  const parsedData = Array.from(formData.entries());
  const { albumId, file } = validateFormData(parsedData);
  await checkAlbum(albumId);

  const uuid = randomUUID();
  const imageEntity = await ImageDb.create({
    id: uuid,
    albumId,
    path: join(UPLOAD_DIR_ALBUMS, albumId, `${uuid}${extname(file.name)}`),
  });

  if (!imageEntity || !imageEntity.path)
    return ServerErrorResponse("Image could not be saved");
  await saveImage(await file.arrayBuffer(), imageEntity.path);
  revalidatePath(RevalidatePath.CLIENT_ALBUMS);
  revalidateTag(RevalidatePath.ADMIN_ALBUMS);
  return NextResponse.json(imageEntity);
}
