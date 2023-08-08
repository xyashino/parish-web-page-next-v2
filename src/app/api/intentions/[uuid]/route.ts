import { NextResponse } from "next/server";
import {
  deleteWeekIntention,
  getWeekIntentionWithRelations,
} from "@/lib/db/weekIntentions";
import { weekUpdateIntentionsValidator } from "@/lib/validators";
import { deleteDaysByWeekId } from "@/lib/db/day";
import { updateWeekIntentions } from "@/lib/db/weekIntentions/update-week-intentions";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intentions = await getWeekIntentionWithRelations(id);
  return NextResponse.json(intentions);
}

export async function PUT(request: Request, { params }: any) {
  const id = params.uuid;
  const data = await request.json();
  const { days, ...weekData } = weekUpdateIntentionsValidator.parse(data);

  await deleteDaysByWeekId(id);

  const intentions = await updateWeekIntentions(id, {
    ...weekData,
    days: {
      create: days.map(({ intentions, ...restOfDayIntentions }) => ({
        ...restOfDayIntentions,
        intentions: {
          create: intentions.map((intention) => ({
            ...intention,
          })),
        },
      })),
    },
  });

  return NextResponse.json(intentions);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intention = await deleteWeekIntention(id);
  return NextResponse.json(intention);
}
