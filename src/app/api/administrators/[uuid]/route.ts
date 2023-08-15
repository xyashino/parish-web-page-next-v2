import { deleteAdministrator } from "@/lib/db/administrators";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = await deleteAdministrator(id);
  revalidateTag(RevalidateTag.ADMINISTRATORS);
  return NextResponse.json(album);
}
