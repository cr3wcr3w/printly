import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "./env";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

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
