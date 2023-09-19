import { NextResponse } from "next/server";
import { createAdministrator, getAdministrators } from "@/lib/db/administrator";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { ServerErrorResponse } from "@/lib/next-responses";

export async function GET() {
  const administrators = await getAdministrators();
  return NextResponse.json(administrators);
}

export async function POST(request: Request) {
  const data: { email: string } = await request.json();
  const administrator = await createAdministrator(data.email);
  if (!administrator)
    return ServerErrorResponse("Administrator could not be created");
  revalidateTag(RevalidateTag.ADMINISTRATORS);
  return NextResponse.json(administrator);
}
