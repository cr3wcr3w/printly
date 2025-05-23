CREATE SCHEMA "print_orders";
--> statement-breakpoint
CREATE SCHEMA "shared";
--> statement-breakpoint
CREATE TYPE "public"."color_type" AS ENUM('COLOR', 'BLACK_AND_WHITE');--> statement-breakpoint
CREATE TYPE "public"."paper_size" AS ENUM('A4', 'LEGAL', 'LETTER');--> statement-breakpoint
CREATE TYPE "public"."sided_type" AS ENUM('SINGLE', 'DOUBLE');--> statement-breakpoint
CREATE TABLE "print_orders"."customers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"address" text,
	"phone_number" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "customers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "print_orders"."order_records" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" uuid NOT NULL,
	"status_id" uuid NOT NULL,
	"specification_id" uuid NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "print_orders"."specifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"paper_size" "paper_size" NOT NULL,
	"paper_type" text NOT NULL,
	"paper_weight" text,
	"color_type" "color_type" NOT NULL,
	"sided" "sided_type" NOT NULL,
	"file_path" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "shared"."statuses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "print_orders"."order_records" ADD CONSTRAINT "order_records_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "print_orders"."customers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "print_orders"."order_records" ADD CONSTRAINT "order_records_status_id_statuses_id_fk" FOREIGN KEY ("status_id") REFERENCES "shared"."statuses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "print_orders"."order_records" ADD CONSTRAINT "order_records_specification_id_specifications_id_fk" FOREIGN KEY ("specification_id") REFERENCES "print_orders"."specifications"("id") ON DELETE set null ON UPDATE no action;