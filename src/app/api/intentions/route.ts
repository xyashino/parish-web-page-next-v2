import { NextResponse } from "next/server";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions/week-intentions";
import { ServerErrorResponse } from "@/lib/next-responses";
import { revalidatePath } from "next/cache";
import { CreateWeekIntentions } from "@/types/db/week-intentions";

export async function POST(request: Request) {
  const data = (await request.json()) as CreateWeekIntentions;
  const result = await WeekIntentionsDb.create(data);
  if (!result) return ServerErrorResponse("Intention could not be created");
  revalidatePath("/");
  return NextResponse.json(result);
}
