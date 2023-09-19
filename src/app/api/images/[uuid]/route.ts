import { NextResponse } from "next/server";
import { getImage } from "@/lib/db/image";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { clearImage } from "@/lib/services/images/server-methods";
import { NotFoundResponse } from "@/lib/next-responses";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const deletedImage = await clearImage(id);
  if (!deletedImage) return NotFoundResponse("Image not found");
  revalidateTag(RevalidateTag.IMAGES);
  return NextResponse.json(deletedImage);
}

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const foundImage = await getImage(id);
  if (!foundImage) return NotFoundResponse("Image not found");
  revalidateTag(RevalidateTag.IMAGES);
  return NextResponse.json(foundImage);
}
