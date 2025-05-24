import type { ZodSchema } from "./types";

import oneOf from "./one-of";

const jsonContentOneOf = <T extends ZodSchema>(
	schemas: T[],
	description: string,
) => {
	return {
		content: {
			"application/json": {
				schema: {
					oneOf: oneOf(schemas),
				},
			},
		},
		description,
	};
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default jsonContentOneOf;
