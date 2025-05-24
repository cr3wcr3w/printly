import type { ZodSchema } from "./types.js";

const jsonContent = <T extends ZodSchema>(schema: T, description: string) => {
	return {
		content: {
			"application/json": {
				schema,
			},
		},
		description,
	};
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default jsonContent;
