// export async function GET() {
//   const result = await getManyAlbums();
//   return NextResponse.json(result);
// }
//
import { Album } from "@prisma/client";
import { createAlbum } from "@/lib/prisma/album";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data: Omit<Album, "id"> = await request.json();
  const result = await createAlbum(data);
  return NextResponse.json(result);
}
