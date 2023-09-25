import { AdministratorDb } from "@/db/handlers/adminstrator";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NextResponse } from "next/server";
import { NotFoundResponse } from "@/lib/next-responses";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = await AdministratorDb.delete(id);
  if (!album) return NotFoundResponse("Administrator not found");
  revalidateTag(RevalidateTag.ADMINISTRATORS);
  return NextResponse.json(album);
}
