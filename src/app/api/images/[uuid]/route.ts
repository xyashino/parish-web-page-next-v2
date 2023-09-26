import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { clearImage } from "@/lib/services/images/server-methods";
import { NotFoundResponse } from "@/lib/next-responses";
import { ImageDb } from "@/db/handlers/album";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const deletedImage = await clearImage(id);
  revalidatePath(`${RevalidatePath.ADMIN_ALBUMS}/${deletedImage.albumId}`);
  if (!deletedImage) return NotFoundResponse("Image not found");
  revalidatePath(RevalidatePath.CLIENT_GALLERY);
  revalidatePath(RevalidatePath.ADMIN_GALLERY);
  return NextResponse.json(deletedImage);
}

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const foundImage = await ImageDb.findOne(id);
  if (!foundImage) return NotFoundResponse("Image not found");
  return NextResponse.json(foundImage);
}
