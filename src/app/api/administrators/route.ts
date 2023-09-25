import { NextResponse } from "next/server";
import { AdministratorDb } from "@/db/handlers/adminstrator";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { ServerErrorResponse } from "@/lib/next-responses";

export async function GET() {
  const administrators = await AdministratorDb.findAll();
  return NextResponse.json(administrators);
}

export async function POST(request: Request) {
  const { email }: { email: string } = await request.json();
  const administrator = await AdministratorDb.create({ email });
  if (!administrator)
    return ServerErrorResponse("Administrator could not be created");
  revalidateTag(RevalidateTag.ADMINISTRATORS);
  return NextResponse.json(administrator);
}
