import { AdministratorDb } from "@/db/handlers/adminstrator";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NotFoundResponse } from "@/lib/next-responses";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const administrator = await AdministratorDb.delete(id);
  if (!administrator) return NotFoundResponse("Administrator not found");
  revalidateTag(RevalidateTag.ADMINISTRATORS);
  return new Response(JSON.stringify(administrator), { status: 200 });
}
