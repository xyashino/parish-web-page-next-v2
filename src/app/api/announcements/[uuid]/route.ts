import { NextResponse } from "next/server";
import {
  deleteAnnouncement,
  getAnnouncement,
  updateAnnouncement,
} from "@/lib/db/announcement";
import { AnnouncementBody } from "@/types/announcement-edit";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NotFoundResponse } from "@/lib/next-responses";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcement = getAnnouncement(id);
  if (!announcement) return NotFoundResponse("Announcement not found");
  return NextResponse.json(announcement);
}
export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const { status, value, subtitle }: AnnouncementBody = await request.json();
  const announcements = await updateAnnouncement(id, {
    value,
    subtitle,
    status,
  });
  if (!announcements) return NotFoundResponse("Announcement not found");
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcements = await deleteAnnouncement(id);
  if (!announcements) return NotFoundResponse("Announcement not found");
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}
