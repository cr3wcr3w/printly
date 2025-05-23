import path from "node:path";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(
	config({
		path: path.resolve(
			process.cwd(),
			// biome-ignore lint/nursery/noProcessEnv: <explanation>
			process.env.NODE_ENV === "test" ? ".env.test" : ".env",
		),
	}),
);

const EnvSchema = z.object({
	NODE_ENV: z.string(),
	BACKEND_PORT: z.coerce.number().default(6000),
	DATABASE_NAME: z.string(),
	DATABASE_PASSWORD: z.string(),
	DATABASE_HOST: z.string(),
	DATABASE_PORT: z.coerce.number(),
	DATABASE_USER: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;

// biome-ignore lint/nursery/noProcessEnv: <explanation>
const parsedEnv = EnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
	// biome-ignore lint/suspicious/noConsole:
	console.error("❌ Invalid env:");
	// biome-ignore lint/suspicious/noConsole:
	console.error(JSON.stringify(parsedEnv.error.flatten().fieldErrors, null, 2));
	process.exit(1);
}

export const env: Env = parsedEnv.data;
