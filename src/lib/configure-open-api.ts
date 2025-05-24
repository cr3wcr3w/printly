import { Scalar } from "@scalar/hono-api-reference";
import type { AppOpenAPI } from "./types";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function configureOpenAPI(app: AppOpenAPI) {
	app.doc("/doc", {
		openapi: "3.0.0",
		info: {
			version: "0.0.1", // todo get this version in package.json
			title: "Printly API",
		},
	});

	app.get(
		"/reference",
		Scalar({
			theme: "kepler",
			layout: "modern",
			defaultHttpClient: {
				targetKey: "js",
				clientKey: "fetch",
			},
			spec: {
				url: "/doc",
			},
		}),
	);
}
