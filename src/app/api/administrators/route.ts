import { NextResponse } from "next/server";
import { AdministratorDb } from "@/db/handlers/adminstrator";
import { revalidatePath } from "next/cache";
import { ServerErrorResponse } from "@/lib/next-responses";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function GET() {
  const administrators = await AdministratorDb.findAll();
  return NextResponse.json(administrators);
}

export async function POST(request: Request) {
  const { email }: { email: string } = await request.json();
  const administrator = await AdministratorDb.create({ email });
  if (!administrator)
    return ServerErrorResponse("Administrator could not be created");
  revalidatePath(RevalidatePath.ADMIN_ADMINISTRATORS);
  return NextResponse.json(administrator);
}
