import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { ServerErrorResponse } from "@/lib/next-responses";
import { CategoryDb } from "@/db/handlers/album";
import { CreateCategory } from "@/types/db/album";

export async function POST(request: NextRequest) {
  const data: Omit<CreateCategory, "id"> = await request.json();
  const result = await CategoryDb.create(data);
  if (!result) return ServerErrorResponse("Category could not be created");
  revalidatePath("/");
  return NextResponse.json(result);
}
