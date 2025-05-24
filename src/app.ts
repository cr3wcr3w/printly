import { createApp } from "./lib/createApp";

const app = createApp();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

// biome-ignore lint/style/noDefaultExport: <explanation>
export default app;
