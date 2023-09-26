import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createDirectory } from "@/lib/services/albums/server-methods";
import { ServerErrorResponse } from "@/lib/next-responses";
import { CreateAlbum } from "@/types/db/album";
import { AlbumDb } from "@/db/handlers/album";

export async function POST(request: Request) {
  const data: Omit<CreateAlbum, "id"> = await request.json();
  const result = await AlbumDb.create(data);
  if (!result) return ServerErrorResponse("Album could not be created");
  await createDirectory(result.id);
  revalidatePath("/");
  return NextResponse.json(result);
}
