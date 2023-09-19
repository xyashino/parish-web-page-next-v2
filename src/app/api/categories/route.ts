import { revalidateTag } from "next/cache";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";
import { RevalidateTag } from "@/types/enums";
import { createCategory, getCategories } from "@/lib/db/category";
import { ServerErrorResponse } from "@/lib/next-responses";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const reqBody: Omit<Category, "id"> = await request.json();
  const result = await createCategory(reqBody);
  if (!result) return ServerErrorResponse("Category could not be created");
  revalidateTag(RevalidateTag.CATEGORIES);
  return NextResponse.json(result);
}
