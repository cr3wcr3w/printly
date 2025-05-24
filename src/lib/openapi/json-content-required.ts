import type { ZodSchema } from "./types.js";

import jsonContent from "./json-content.js";

const jsonContentRequired = <T extends ZodSchema>(
	schema: T,
	description: string,
) => {
	return {
		...jsonContent(schema, description),
		required: true,
	};
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default jsonContentRequired;
