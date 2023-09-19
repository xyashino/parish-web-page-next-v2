import {
  deleteAlbum,
  getAlbumWithRelations,
  updateAlbum,
} from "@/lib/db/album";
import { Album } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { deleteDirectory } from "@/lib/services/albums/server-methods";
import { NotFoundResponse } from "@/lib/next-responses";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = await getAlbumWithRelations(id);
  if (!album) return NotFoundResponse("Album not found");
  return NextResponse.json(album);
}

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const data: Omit<Album, "id"> = await request.json();
  const album = await updateAlbum(id, data);
  if (!album) return NotFoundResponse("Album not found");
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(album);
}
export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  await deleteDirectory(id);
  const album = await deleteAlbum(id);
  if (!album) return NotFoundResponse("Album not found");
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(album);
}
