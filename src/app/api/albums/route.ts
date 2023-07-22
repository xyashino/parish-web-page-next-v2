import { Album } from "@prisma/client";
import { createAlbum } from "@/lib/db/album";
import { NextResponse } from "next/server";
import { mkdir } from "fs/promises";
import { join } from "path";

const createDirectory = (id: string) => {
  const { UPLOAD_DIR } = process.env;
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  return mkdir(join(process.cwd(), UPLOAD_DIR, "/albums", id), {
    recursive: true,
  });
};

export async function POST(request: Request) {
  const data: Omit<Album, "id"> = await request.json();
  const result = await createAlbum({ ...data });
  await createDirectory(result.id);
  return NextResponse.json(result);
}
