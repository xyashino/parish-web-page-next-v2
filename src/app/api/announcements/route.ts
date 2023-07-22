import { NextResponse } from "next/server";
import { getAnnouncements } from "@/lib/db/announcement";

export async function GET() {
  const result = await getAnnouncements({
    status: "desc",
  });
  return NextResponse.json(result);
}

// export async function POST(request: Request) {
//   const { value, status, subtitle }: any = await request.json();
//
//   const result = await createAnnouncement({
//     status,
//     value,
//     subtitle: subtitle || null,
//   });
//   return NextResponse.json(result);
// }
