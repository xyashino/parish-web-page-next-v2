import { adminTable } from "@/db/schema/admin";

type CreateAdministrator = typeof adminTable.$inferInsert;
type SelectType = typeof adminTable.$inferSelect;
type AdministratorResponse = SelectType;
type AdministratorListResponse = SelectType[];
