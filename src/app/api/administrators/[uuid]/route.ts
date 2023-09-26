import { AdministratorDb } from "@/db/handlers/adminstrator";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { NotFoundResponse } from "@/lib/next-responses";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = await AdministratorDb.delete(id);
  if (!album) return NotFoundResponse("Administrator not found");
  revalidatePath(RevalidatePath.ADMIN_ADMINISTRATORS);
  return NextResponse.json(album);
}
