import { NextResponse } from "next/server";
import { getWeekIntentionWithRelations } from "@/lib/db/weekIntentions";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intentions = await getWeekIntentionWithRelations(id);
  return NextResponse.json(intentions);
}

// export async function PUT(request: Request, { params }: any) {
//   const id = params.uuid;
//   const { days, ...restOfWeekIntentionsData }: WeekIntentionsData =
//     await request.json();
//
//   await deleteIntention(id);
//
//   const intentions = await createIntention({
//     ...restOfWeekIntentionsData,
//     days: {
//       create: days.map(({ intentions, ...restOfDayIntentions }) => ({
//         ...restOfDayIntentions,
//         intentions: {
//           create: intentions.map((intention) => ({
//             ...intention,
//           })),
//         },
//       })),
//     },
//   });
//
//   return NextResponse.json(intentions);
// }
//
// export async function DELETE(request: Request, { params }: ParamsWithUuid) {
//   const id = params.uuid;
//   const intentions = await deleteIntention(id);
//   return NextResponse.json(intentions);
// }
