import { sql } from "drizzle-orm";
import { pgEnum, pgSchema, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { statuses } from "./shared";

export const printSchema = pgSchema("print_orders");

export const customers = printSchema.table("customers", {
	id: uuid("id").notNull().primaryKey().default(sql`gen_random_uuid()`),
	email: text("email").notNull().unique(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	address: text("address"),
	phoneNumber: text("phone_number"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const orderRecords = printSchema.table("order_records", {
	id: uuid("id").notNull().primaryKey().default(sql`gen_random_uuid()`),
	customerId: uuid("customer_id")
		.notNull()
		.references(() => customers.id, { onDelete: "cascade" }),
	statusId: uuid("status_id")
		.notNull()
		.references(() => statuses.id, { onDelete: "set null" }),
	specificationId: uuid("specification_id")
		.notNull()
		.references(() => printSpecifications.id, { onDelete: "set null" }),
	notes: text("notes"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const paperSizeEnum = pgEnum("paper_size", ["A4", "LEGAL", "LETTER"]);
export const colorTypeEnum = pgEnum("color_type", ["COLOR", "BLACK_AND_WHITE"]);
export const sidedEnum = pgEnum("sided_type", ["SINGLE", "DOUBLE"]);

export const printSpecifications = printSchema.table("specifications", {
	id: uuid("id").notNull().primaryKey().default(sql`gen_random_uuid()`),
	paperSize: paperSizeEnum("paper_size").notNull(), // e.g., 'A4', 'Legal', 'Letter'
	paperType: text("paper_type").notNull(), // e.g., 'Bond', 'Photo', 'Cardstock'
	paperWeight: text("paper_weight"), // e.g., '80gsm', '120gsm'
	colorType: colorTypeEnum("color_type").notNull(), // e.g., 'Color', 'Black & White'
	sided: sidedEnum("sided").notNull(), // e.g., 'Single', 'Double'
	filePath: text("file_path").notNull(), // Path to the file
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull(),
});
