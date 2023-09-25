import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NotFoundResponse, ServerErrorResponse } from "@/lib/next-responses";
import { Status } from "@/types/db/enums";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { CreateAnnouncement } from "@/types/db/announcement";

export async function GET(request: Request) {
  const status = new URLSearchParams(request.url).get("status");

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
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(result);
}
