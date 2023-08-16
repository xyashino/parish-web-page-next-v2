import { NextResponse } from "next/server";
import { deleteCategory, updateCategory } from "@/lib/db/category";
import { Category } from "@prisma/client";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const changeData: Omit<Category, "id"> = await request.json();
  const categories = await updateCategory(id, {
    ...changeData,
  });
  revalidateTag(RevalidateTag.CATEGORIES);

  return NextResponse.json(categories);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const category = await deleteCategory(id);
  revalidateTag(RevalidateTag.CATEGORIES);
  return NextResponse.json(category);
}
