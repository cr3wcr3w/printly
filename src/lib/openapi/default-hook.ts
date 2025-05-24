import type { Hook } from "@hono/zod-openapi";

import { UNPROCESSABLE_ENTITY } from "../../constant/http-status-codes";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const defaultHook: Hook<any, any, any, any> = (result, c) => {
	if (!result.success) {
		return c.json(
			{
				success: result.success,
				error: result.error,
			},
			UNPROCESSABLE_ENTITY,
		);
	}
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defaultHook;
