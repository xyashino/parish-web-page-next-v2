import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { NotFoundResponse } from "@/lib/next-responses";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions/week-intentions";
import { CreateWeekIntentions } from "@/types/db/week-intentions";

export async function PUT(request: Request, { params }: any) {
  const id = params.uuid;
  const data = (await request.json()) as CreateWeekIntentions;
  const result = WeekIntentionsDb.update(id, data);
  if (!result) return NotFoundResponse("Intention not found");
  revalidatePath("/");
  return NextResponse.json(result);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intention = await WeekIntentionsDb.delete(id);
  if (!intention) return NotFoundResponse("Intention not found");
  revalidatePath("/");
  return NextResponse.json(intention);
}
