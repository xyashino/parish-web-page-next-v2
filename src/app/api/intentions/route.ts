import { NextResponse } from "next/server";
import { getManyWeekIntentions } from "@/lib/prisma/weekIntentions";
import { WeekIntentionsStoreData } from "@/types/interfaces/week-intentions-store.interface";

export async function GET() {
  const result = await getManyWeekIntentions();
  return NextResponse.json(result);
}

// export async function POST(request: Request) {
//   const { days, status, endWeek, startWeek }: WeekIntentionsStoreData["weekIntentions"] =
//     await request.json();
//
//   // const result = await createIntention({
//   //   startWeek,
//   //   endWeek,
//   //   status,
//   //   days: {
//   //     create: days.map(({ intentions, ...rest }) => ({
//   //       ...rest,
//   //       intentions: {
//   //         create: intentions.map((intention) => ({
//   //           ...intention,
//   //         })),
//   //       },
//   //     })),
//   //   },
//   // });
//   return NextResponse.json(result);
// }
