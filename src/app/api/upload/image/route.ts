import { createImage } from "@/lib/db/image";
import { NextResponse } from "next/server";

import { checkAlbum, saveAsWebp, validateFormData } from "./route-helper";

const { UPLOAD_DIR } = process.env;
export async function POST(request: Request) {
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  const formData = await request.formData();
  const parsedData = Array.from(formData.entries());
  const { albumId, file } = validateFormData(parsedData);

  await checkAlbum(albumId);

  const imageEntity = await createImage("/albums/", albumId, "webp");
  if (!imageEntity.path) throw new Error("Something went wrong");
  await saveAsWebp(await file.arrayBuffer(), imageEntity.path);
  console.log(imageEntity);
  return NextResponse.json(imageEntity);
}
