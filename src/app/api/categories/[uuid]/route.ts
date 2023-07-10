import { NextResponse } from "next/server";
import { deleteCategory, updateCategory } from "@/lib/prisma/category";
import { Category } from "@prisma/client";

// export async function GET(request: Request, { params }: ParamsWithUuid) {
//     const id = params.uuid;
//     const intentions = getCat(id);
//     return NextResponse.json(intentions);
// }

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const { name, order }: Category = await request.json();
  const intentions = await updateCategory(id, {
    name,
    order,
  });
  return NextResponse.json(intentions);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intentions = await deleteCategory(id);
  return NextResponse.json(intentions);
}
