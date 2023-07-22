import { NextResponse } from "next/server";
import { deleteCategory, updateCategory } from "@/lib/db/category";
import { Category } from "@prisma/client";

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const { name, order }: Category = await request.json();
  const categories = await updateCategory(id, {
    name,
    order,
  });
  return NextResponse.json(categories);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const category = await deleteCategory(id);
  return NextResponse.json(category);
}
