import { NextResponse } from "next/server";
import { getAdministrators } from "@/lib/db/administrators";
import { createAdministrator } from "@/lib/db/administrators";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

export async function GET() {
  const administrators = await getAdministrators();
  return NextResponse.json(administrators);
}

export async function POST(request: Request) {
  const data: { email: string } = await request.json();
  const administrator = await createAdministrator(data.email);
  revalidateTag(RevalidateTag.ADMINISTRATORS);
  return NextResponse.json(administrator);
}
