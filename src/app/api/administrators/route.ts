import { NextResponse } from "next/server";
import { createAdministrator, getAdministrators } from "@/lib/db/administrator";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";

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
