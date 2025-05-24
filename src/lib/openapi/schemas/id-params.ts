import { z } from "@hono/zod-openapi";

const IdParamsSchema = z.object({
	id: z.coerce.number().openapi({
		param: {
			name: "id",
			in: "path",
			required: true,
		},
		required: ["id"],
		example: 42,
	}),
});

// biome-ignore lint/style/noDefaultExport: <explanation>
export default IdParamsSchema;
