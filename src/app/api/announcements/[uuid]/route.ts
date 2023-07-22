import { NextResponse } from "next/server";
import { getAnnouncement } from "@/lib/db/announcement/get-announcement";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intentions = getAnnouncement(id);
  return NextResponse.json(intentions);
}
//
// export async function PUT(request: Request, { params }: ParamsWithUuid) {
//   const id = params.uuid;
//   const { status, value, subtitle }: Announcements = await request.json();
//   const intentions = await updateAnnouncement(id, {
//     value,
//     subtitle,
//     status,
//   });
//
//   return NextResponse.json(intentions);
// }
//
// export async function DELETE(request: Request, { params }: ParamsWithUuid) {
//   const id = params.uuid;
//   const intentions = await deleteAnnouncement(id);
//   return NextResponse.json(intentions);
// }
