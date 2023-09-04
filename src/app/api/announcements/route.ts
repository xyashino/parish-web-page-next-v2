import { NextResponse } from "next/server";
import {
  createAnnouncement,
  getActiveAnnouncement,
  getAnnouncements,
} from "@/lib/db/announcement";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { Status } from "@prisma/client";

export async function GET(request: Request) {
  const status = new URLSearchParams(request.url).get("status");

  if (status === Status.ACTIVE) {
    const albums = await getActiveAnnouncement();
    return NextResponse.json(albums);
  }

  const result = await getAnnouncements({
    status: "desc",
  });

  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const { value, status, subtitle }: any = await request.json();
  const result = await createAnnouncement({
    status,
    value,
    subtitle: subtitle || null,
  });
  revalidateTag(RevalidateTag.ANNOUNCEMENTS);
  return NextResponse.json(result);
}
