import { NextResponse } from "next/server";
import { CategoryResponse } from "@/types/db/album";
import { CategoryDb } from "@/db/handlers/album";
import { RevalidatePath } from "@/types/enums/revalidate-path";
import { revalidatePath } from "next/cache";

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const changeData: Omit<CategoryResponse, "id"> = await request.json();
  const category = await CategoryDb.update(id, changeData);
  if (!category) return NextResponse.json("Category not found");
  revalidatePath(RevalidatePath.CLIENT_GALLERY);
  revalidatePath(RevalidatePath.ADMIN_GALLERY);
  return NextResponse.json(category);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const category = await CategoryDb.delete(id);
  if (!category) return NextResponse.json("Category not found");
  revalidatePath(RevalidatePath.CLIENT_GALLERY);
  revalidatePath(RevalidatePath.ADMIN_GALLERY);
  return NextResponse.json(category);
}
