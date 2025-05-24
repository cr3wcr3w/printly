import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound } from "../middleware/notFound";
import onError from "../middleware/on-error";
import { pinoLogger } from "../middleware/pino-logger";

import type { AppBindings } from "./types";

export function createApp() {
	const app = new OpenAPIHono<AppBindings>();
	app.use(pinoLogger());

	app.notFound(notFound);
	app.onError(onError);

	return app;
}
