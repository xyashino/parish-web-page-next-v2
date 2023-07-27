import { Announcements, Status } from "@prisma/client";

export type AnnouncementsData = Omit<Announcements, "id" | "value">;
export type AnnouncementBody = AnnouncementsData & {
  value: Announcements["value"];
};
export type UpdateAnnouncementData =
  | {
      key: keyof AnnouncementsData;
      value: string;
    }
  | {
      key: "status";
      value: Status;
    };
