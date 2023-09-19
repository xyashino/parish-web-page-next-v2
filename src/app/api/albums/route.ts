import { Album } from "@prisma/client";
import { createAlbum, getAlbums } from "@/lib/db/album";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { createDirectory } from "@/lib/services/albums/server-methods";
import { ServerErrorResponse } from "@/lib/next-responses";

export async function GET() {
  const albums = await getAlbums();
  return NextResponse.json(albums);
}

export async function POST(request: Request) {
  const data: Omit<Album, "id"> = await request.json();
  const result = await createAlbum({ ...data });
  if (!result) return ServerErrorResponse("Album could not be created");
  await createDirectory(result.id);
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(result);
}
