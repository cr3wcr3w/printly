import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound } from "./middleware/notFound";
import onError from "./middleware/on-error";
import { pinoLogger } from "./middleware/pino-logger";

import type { AppBindings } from "./types";

const app = new OpenAPIHono<AppBindings>();
app.use(pinoLogger());

app.get("/", (c) => {
	return c.text("Hello Hono!");
});
app.get("/error", (c) => {
	c.var.logger.info("This is an info log");
	throw new Error("This is an error");
});

app.notFound(notFound);
app.onError(onError);

// biome-ignore lint/style/noDefaultExport: <explanation>
export default app;
