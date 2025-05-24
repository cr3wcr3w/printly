import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound } from "./helper/notFound";
import onError from "./helper/on-error";

const app = new OpenAPIHono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});
app.get("/error", () => {
	throw new Error("This is an error");
});

app.notFound(notFound);
app.onError(onError);

// biome-ignore lint/style/noDefaultExport: <explanation>
export default app;
