import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import { join } from "path";
import { deleteImage, getImage } from "@/lib/db/image";

const clearImage = async (id: string) => {
  const { UPLOAD_DIR } = process.env;
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  try {
    const deletedImage = await deleteImage(id);
    await unlink(
      join(process.cwd(), UPLOAD_DIR, deletedImage.path ?? "test.png")
    );
    return deletedImage;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const deletedImage = await clearImage(id);
  console.log(deletedImage);
  return NextResponse.json(deletedImage);
}

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const foundImage = await getImage(id);
  return NextResponse.json(foundImage);
}
