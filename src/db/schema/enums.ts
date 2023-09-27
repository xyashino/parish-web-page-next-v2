import { pgEnum } from "drizzle-orm/pg-core";

import {
  DAY,
  DAY_ENUM_NAME,
  STATUS,
  STATUS_ENUM_NAME,
} from "@/config/constants/db";

export const statusEnum = pgEnum(STATUS_ENUM_NAME, STATUS);
export const dayEnum = pgEnum(DAY_ENUM_NAME, DAY);
