import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "../constant/http-status-codes";
import { jsonContent } from "../lib/openapi";
import { createMessageObjectSchema } from "../lib/openapi/schemas";

import { createRouter } from "../lib/createApp";

const router = createRouter().openapi(
	createRoute({
		tags: ["Index"],
		method: "get",
		path: "/",
		responses: {
			[HttpStatusCodes.OK]: jsonContent(
				createMessageObjectSchema("Printly API"),
				"Printly API Index",
			),
		},
	}),
	(c) => {
		return c.json(
			{
				message: "Printly API",
			},
			HttpStatusCodes.OK,
		);
	},
);

// biome-ignore lint/style/noDefaultExport: <explanation>
export default router;
