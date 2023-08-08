import { NextResponse } from "next/server";
import {
  createWeekIntention,
  getManyWeekIntentions,
} from "@/lib/db/weekIntentions";
import { weekCreateIntentionsValidator } from "@/lib/validators";

export async function GET() {
  const result = await getManyWeekIntentions();
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const data = await request.json();
  const { days, ...weekData } = weekCreateIntentionsValidator.parse(data);
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
