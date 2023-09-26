import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ServerErrorResponse } from "@/lib/next-responses";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { CreateAnnouncement } from "@/types/db/announcement";

export async function POST(request: Request) {
  const data: CreateAnnouncement = await request.json();
  const result = await AnnouncementDb.create(data);
  if (!result) return ServerErrorResponse("Announcement could not be created");
  revalidatePath("/");
  return NextResponse.json(result);
}
