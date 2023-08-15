import { revalidateTag } from "next/cache";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";
import { RevalidateTag } from "@/types/enums";
import { createCategory, getCategories } from "@/lib/db/category";
export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const reqBody: Omit<Category, "id"> = await request.json();
  const result = await createCategory(reqBody);
  revalidateTag(RevalidateTag.CATEGORIES);
  return NextResponse.json(result);
}
