import { NextResponse } from "next/server";
import { getImage } from "@/lib/db/image";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { clearImage } from "@/lib/services/images/server-methods";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const deletedImage = await clearImage(id);
  revalidateTag(RevalidateTag.IMAGES);
  return NextResponse.json(deletedImage);
}

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const foundImage = await getImage(id);
  revalidateTag(RevalidateTag.IMAGES);
  if (!foundImage)
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  return NextResponse.json(foundImage);
}
