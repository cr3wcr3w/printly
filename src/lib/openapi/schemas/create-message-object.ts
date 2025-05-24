import { z } from "@hono/zod-openapi";

const createMessageObjectSchema = (exampleMessage = "Hello World") => {
	return z
		.object({
			message: z.string(),
		})
		.openapi({
			example: {
				message: exampleMessage,
			},
		});
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default createMessageObjectSchema;
