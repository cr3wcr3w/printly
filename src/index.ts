import { serve } from "@hono/node-server";
import app from "./app";
import { env } from "./env";

serve(
	{
		fetch: app.fetch,
		port: env.BACKEND_PORT,
	},
	(info) => {
		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
