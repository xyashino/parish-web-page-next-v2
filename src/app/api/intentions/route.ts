import { NextRequest, NextResponse } from "next/server";
import {
  createWeekIntention,
  getActiveWeekIntentions,
  getManyWeekIntentions,
} from "@/lib/db/weekIntentions";
import { weekIntentionsValidator } from "@/lib/validators";
import { Status } from "@prisma/client";

export async function GET({ url }: NextRequest) {
  const status = new URL(url).searchParams.get("status");
  if (status === Status.ACTIVE) {
    const result = await getActiveWeekIntentions();
    return NextResponse.json(result);
  }

  const result = await getManyWeekIntentions();
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const data = (await request.json()) as any;
  const { days, ...weekData } = weekIntentionsValidator.parse(data);
  const result = await createWeekIntention({
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
  return NextResponse.json(result);
}
