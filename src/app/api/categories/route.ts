import { createCategory, getCategories } from "@/lib/prisma/category";
import { NextResponse } from "next/server";
import { Category } from "@prisma/client";
export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const reqBody: Omit<Category, "id"> = await request.json();
  const result = await createCategory(reqBody);
  return NextResponse.json(result);
}
