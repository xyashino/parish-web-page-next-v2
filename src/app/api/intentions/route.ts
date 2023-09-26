import { NextRequest, NextResponse } from "next/server";
import { WeekIntentionsDb } from "@/db/handlers/week-intentions/week-intentions";
import { NotFoundResponse, ServerErrorResponse } from "@/lib/next-responses";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { CreateWeekIntentions } from "@/types/db/week-intentions";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  if (status === "ACTIVE") {
    const result = await WeekIntentionsDb.getActive();
    if (!result) return NotFoundResponse("Active intentions not found");
    return NextResponse.json(result);
  }

  const result = await WeekIntentionsDb.findAll();
  return new Response(JSON.stringify(result), { status: 200 });
}

export async function POST(request: Request) {
  const data = (await request.json()) as CreateWeekIntentions;
  const result = await WeekIntentionsDb.create(data);
  if (!result) return ServerErrorResponse("Intention could not be created");
  revalidateTag(RevalidateTag.INTENTIONS);
  return new Response(JSON.stringify(result), { status: 200 });
}
