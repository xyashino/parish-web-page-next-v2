import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NotFoundResponse } from "@/lib/next-responses";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { CreateAnnouncement } from "@/types/db/announcement";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcement = await AnnouncementDb.findOne(id);
  console.log({ announcement });
  if (!announcement) return NotFoundResponse("Announcement not found");
  return NextResponse.json(announcement);
}
export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const data: Omit<CreateAnnouncement, "id"> = await request.json();
  const announcements = await AnnouncementDb.update(id, data);
  if (!announcements) return NotFoundResponse("Announcement not found");
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcements = await AnnouncementDb.delete(id);
  if (!announcements) return NotFoundResponse("Announcement not found");
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}
