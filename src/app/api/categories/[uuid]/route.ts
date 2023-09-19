import { NextResponse } from "next/server";
import { deleteCategory, updateCategory } from "@/lib/db/category";
import { Category } from "@prisma/client";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const changeData: Omit<Category, "id"> = await request.json();
  const category = await updateCategory(id, {
    ...changeData,
  });
  if (!category) return NextResponse.json("Category not found");
  revalidateTag(RevalidateTag.CATEGORIES);
  return NextResponse.json(category);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const category = await deleteCategory(id);
  if (!category) return NextResponse.json("Category not found");
  revalidateTag(RevalidateTag.CATEGORIES);
  return NextResponse.json(category);
}
