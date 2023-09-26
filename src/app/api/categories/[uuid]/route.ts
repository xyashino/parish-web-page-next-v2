import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { CategoryResponse } from "@/types/db/album";
import { CategoryDb } from "@/db/handlers/album";

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const changeData: Omit<CategoryResponse, "id"> = await request.json();
  const category = await CategoryDb.update(id, changeData);
  if (!category) return NextResponse.json("Category not found");
  revalidateTag(RevalidateTag.CATEGORIES);
  return new Response(JSON.stringify(category), { status: 200 });
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const category = await CategoryDb.delete(id);
  if (!category) return NextResponse.json("Category not found");
  revalidateTag(RevalidateTag.CATEGORIES);
  return new Response(JSON.stringify(category), { status: 200 });
}
