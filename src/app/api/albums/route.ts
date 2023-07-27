import { Album } from "@prisma/client";
import { createAlbum, getAlbums } from "@/lib/db/album";
import { NextResponse } from "next/server";
import { mkdir } from "fs/promises";
import { join } from "path";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

const createDirectory = (id: string) => {
  const { UPLOAD_DIR } = process.env;
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  return mkdir(join(process.cwd(), UPLOAD_DIR, "/albums", id), {
    recursive: true,
  });
};
export async function GET() {
  const albums = await getAlbums();
  return NextResponse.json(albums);
}

export async function POST(request: Request) {
  const data: Omit<Album, "id"> = await request.json();
  const result = await createAlbum({ ...data });
  await createDirectory(result.id);
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(result);
}
