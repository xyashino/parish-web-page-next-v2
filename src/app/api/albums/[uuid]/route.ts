import {
  deleteAlbum,
  getAlbumWithRelations,
  updateAlbum,
} from "@/lib/db/album";
import { Album } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { deleteDirectory } from "@/lib/services/albums/server-methods";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = await getAlbumWithRelations(id);
  return NextResponse.json(album);
}

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const data: Omit<Album, "id"> = await request.json();
  const albums = await updateAlbum(id, data);
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(albums);
}
export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  await deleteDirectory(id);
  const album = await deleteAlbum(id);
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(album);
}
