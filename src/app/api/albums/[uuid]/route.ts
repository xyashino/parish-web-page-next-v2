import {
  deleteAlbum,
  getAlbumWithRelations,
  updateAlbum,
} from "@/lib/db/album";
import { Album } from "@prisma/client";
import { NextResponse } from "next/server";
import { rmdir } from "fs/promises";
import { join } from "path";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

const deleteDirectory = async (id: string) => {
  const { UPLOAD_DIR } = process.env;
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  try {
    await rmdir(join(process.cwd(), UPLOAD_DIR, "/albums", id), {
      recursive: true,
    });
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = getAlbumWithRelations(id);
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
