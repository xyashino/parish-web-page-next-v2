import { announcementTable } from "@/db/schema/announcement";

type SelectAnnouncement = typeof announcementTable.$inferSelect;
type CreateAnnouncement = typeof announcementTable.$inferInsert;

type AnnouncementResponse = SelectAnnouncement;
type AnnouncementsResponse = SelectAnnouncement[];
