import { deleteAlbum, updateAlbum } from "@/lib/prisma/album";
import { Album } from "@prisma/client";
import { NextResponse } from "next/server";

// export async function GET(request: Request, { params }: ParamsWithUUID) {
//   const id = params.uuid;
//   // const intentions = getAlbum(id);
//   return NextResponse.json(intentions);
// }
//
export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const data: Omit<Album, "id"> = await request.json();
  const intentions = await updateAlbum(id, data);
  return NextResponse.json(intentions);
}
export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  console.log("id", id);
  const intentions = await deleteAlbum(id);
  return NextResponse.json(intentions);
}
