import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound } from "../middleware/notFound";
import onError from "../middleware/on-error";
import { pinoLogger } from "../middleware/pino-logger";
import defaultHook from "./openapi/default-hook";
import type { AppBindings } from "./types";

export function createRouter() {
	return new OpenAPIHono<AppBindings>({
		strict: false,
		defaultHook,
	});
}

export function createApp() {
	const app = new OpenAPIHono<AppBindings>();
	app.use(pinoLogger());

	app.notFound(notFound);
	app.onError(onError);

	return app;
}
