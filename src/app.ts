import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound } from "./helper/notFound";

const app = new OpenAPIHono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.notFound(notFound);

// biome-ignore lint/style/noDefaultExport: <explanation>
export default app;
