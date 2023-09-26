import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { NotFoundResponse, ServerErrorResponse } from "@/lib/next-responses";
import { Status } from "@/types/db/enums";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { CreateAnnouncement } from "@/types/db/announcement";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");

  if (status === ("ACTIVE" as Status)) {
    const announcements = await AnnouncementDb.getActiveAnnouncement();
    if (!announcements)
      return NotFoundResponse("Active announcement not found");
    return NextResponse.json(announcements);
  }
  const result = await AnnouncementDb.findAll();
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const data: CreateAnnouncement = await request.json();
  const result = await AnnouncementDb.create(data);
  if (!result) return ServerErrorResponse("Announcement could not be created");
  revalidatePath(RevalidatePath.CLIENT_ANNOUNCEMENTS);
  return NextResponse.json(result);
}
