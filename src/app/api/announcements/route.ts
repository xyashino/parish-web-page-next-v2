import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NotFoundResponse, ServerErrorResponse } from "@/lib/next-responses";
import { Status } from "@/types/db/enums";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { CreateAnnouncement } from "@/types/db/announcement";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");

  if (status === ("ACTIVE" as Status)) {
    const announcements = await AnnouncementDb.getActiveAnnouncement();
    if (!announcements)
      return NotFoundResponse("Active announcement not found");
    return new Response(JSON.stringify(announcements), { status: 200 });
  }
  const announcements = await AnnouncementDb.findAll();
  return new Response(JSON.stringify(announcements), { status: 200 });
}

export async function POST(request: Request) {
  const data: CreateAnnouncement = await request.json();
  const announcements = await AnnouncementDb.create(data);
  if (!announcements)
    return ServerErrorResponse("Announcement could not be created");
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return new Response(JSON.stringify(announcements), { status: 200 });
}
