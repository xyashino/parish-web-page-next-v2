import { NextResponse } from "next/server";
import {
  deleteAnnouncement,
  getAnnouncement,
  updateAnnouncement,
} from "@/lib/db/announcement";
import { AnnouncementBody } from "@/types/announcement-edit";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcement = getAnnouncement(id);
  if (!announcement)
    return NextResponse.json(
      { error: "Announcement not found" },
      { status: 404 },
    );
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
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}
export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcements = await deleteAnnouncement(id);
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}
