import { NextResponse } from "next/server";
import { createAnnouncement, getAnnouncements } from "@/lib/db/announcement";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";

export async function GET() {
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
