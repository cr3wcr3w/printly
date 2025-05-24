import configureOpenAPI from "./lib/configure-open-api";
import { createApp } from "./lib/createApp";
import index from "./routes/index";

const app = createApp();

configureOpenAPI(app);

// add your routes here
const routes = [index] as const;

// biome-ignore lint/complexity/noForEach: <explanation>
routes.forEach((route) => {
	app.route("/", route);
});

export type AppType = (typeof routes)[number];

// biome-ignore lint/style/noDefaultExport: <explanation>
export default app;
