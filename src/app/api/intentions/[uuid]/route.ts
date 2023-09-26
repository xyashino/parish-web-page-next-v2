import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { NotFoundResponse } from "@/lib/next-responses";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions/week-intentions";
import { CreateWeekIntentions } from "@/types/db/week-intentions";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intentions = await WeekIntentionsDb.getOneWithRelations(id);
  if (!intentions) return NotFoundResponse("Intention not found");
  return NextResponse.json(intentions);
}

export async function PUT(request: Request, { params }: any) {
  const id = params.uuid;
  const data = (await request.json()) as CreateWeekIntentions;
  const result = WeekIntentionsDb.update(id, data);
  if (!result) return NotFoundResponse("Intention not found");
  revalidatePath(RevalidatePath.CLIENT_INTENTIONS);
  return NextResponse.json(result);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intention = await WeekIntentionsDb.delete(id);
  if (!intention) return NotFoundResponse("Intention not found");
  revalidatePath(RevalidatePath.CLIENT_INTENTIONS);
  return NextResponse.json(intention);
}
