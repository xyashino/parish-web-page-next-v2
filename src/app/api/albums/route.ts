import { Album } from "@prisma/client";
import { createAlbum, getAlbums } from "@/lib/db/album";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { createDirectory } from "@/lib/services/albums/server-methods";

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
