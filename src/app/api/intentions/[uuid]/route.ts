import { NextResponse } from "next/server";
import {
  deleteWeekIntention,
  getWeekIntentionWithRelations,
  updateWeekIntentions,
} from "@/lib/db/weekIntentions";
import { weekUpdateIntentionsValidator } from "@/lib/validators";
import { deleteDaysByWeekId } from "@/lib/db/day";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { NotFoundResponse } from "@/lib/next-responses";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intentions = await getWeekIntentionWithRelations(id);
  if (!intentions) return NotFoundResponse("Intention not found");
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
      create: days.map(({ intentions, ...rest }) => ({
        ...rest,
        intentions: {
          create: intentions.map((intention) => ({
            ...intention,
          })),
        },
      })),
    },
  });
  if (!intentions) return NotFoundResponse("Intention not found");
  revalidateTag(RevalidateTag.INTENTIONS);
  return NextResponse.json(intentions);
}

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const intention = await deleteWeekIntention(id);
  if (!intention) return NotFoundResponse("Intention not found");
  revalidateTag(RevalidateTag.INTENTIONS);
  return NextResponse.json(intention);
}
