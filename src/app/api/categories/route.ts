import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { RevalidateTag } from "@/types/enums";
import { ServerErrorResponse } from "@/lib/next-responses";
import { CategoryDb } from "@/db/handlers/album";
import { CreateCategory } from "@/types/db/album";
import { Status } from "@/types/db/enums";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");

  if (status === ("ACTIVE" as Status)) {
    const categories = await CategoryDb.findAllActive();
    return NextResponse.json(categories);
  }
  const categories = await CategoryDb.findAll();
  return new Response(JSON.stringify(categories), { status: 200 });
}

export async function POST(request: Request) {
  const data: Omit<CreateCategory, "id"> = await request.json();
  const result = await CategoryDb.create(data);
  if (!result) return ServerErrorResponse("Category could not be created");
  revalidateTag(RevalidateTag.CATEGORIES);
  return new Response(JSON.stringify(result), { status: 200 });
}
