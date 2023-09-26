import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { NotFoundResponse } from "@/lib/next-responses";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { CreateAnnouncement } from "@/types/db/announcement";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcement = await AnnouncementDb.findOne(id);
  if (!announcement) return NotFoundResponse("Announcement not found");
  return NextResponse.json(announcement);
}
export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const data: Omit<CreateAnnouncement, "id"> = await request.json();
  const announcements = await AnnouncementDb.update(id, data);
  if (!announcements) return NotFoundResponse("Announcement not found");
  revalidatePath(RevalidatePath.ADMIN_ANNOUNCEMENTS);
  revalidatePath(RevalidatePath.CLIENT_ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const announcements = await AnnouncementDb.delete(id);
  if (!announcements) return NotFoundResponse("Announcement not found");
  revalidatePath(RevalidatePath.ADMIN_ADMINISTRATORS);
  revalidatePath(RevalidatePath.CLIENT_ANNOUNCEMENTS);
  return NextResponse.json(announcements);
}
