import { NextRequest, NextResponse } from "next/server";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions/week-intentions";
import { NotFoundResponse, ServerErrorResponse } from "@/lib/next-responses";
import { revalidatePath } from "next/cache";
import { CreateWeekIntentions } from "@/types/db/week-intentions";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  if (status === "ACTIVE") {
    const result = await WeekIntentionsDb.getActive();
    if (!result) return NotFoundResponse("Active intentions not found");
    return NextResponse.json(result);
  }

  const result = await WeekIntentionsDb.findAll();
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const data = (await request.json()) as CreateWeekIntentions;
  const result = await WeekIntentionsDb.create(data);
  if (!result) return ServerErrorResponse("Intention could not be created");
  revalidatePath(RevalidatePath.CLIENT_INTENTIONS);
  revalidatePath(RevalidatePath.ADMIN_INTENTIONS);
  return NextResponse.json(result);
}
