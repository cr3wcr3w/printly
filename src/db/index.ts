import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "../env";

const pool = new Pool({
	database: env.DATABASE_NAME,
	user: env.DATABASE_USER,
	password: env.DATABASE_PASSWORD,
	host: env.DATABASE_HOST,
	port: env.DATABASE_PORT,
	ssl: false,
});

export const db = drizzle(pool);
