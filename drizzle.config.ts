import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";
import { env } from "./src/env";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
	out: "./drizzle",
	schema: ["./src/db/schema/printOrders.ts", "./src/db/schema/shared.ts"],
	dialect: "postgresql",
	dbCredentials: {
		database: env.DATABASE_NAME,
		user: env.DATABASE_USER,
		password: env.DATABASE_PASSWORD,
		host: env.DATABASE_HOST,
		port: env.DATABASE_PORT,
		ssl: false,
	},
} satisfies Config);
