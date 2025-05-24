import { pinoLogger as logger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";
import { env } from "../env";

/**
 * Middleware to log requests and responses using Pino.
 *
 * @returns {Function} A middleware function that logs requests and responses.
 *
 * @example
 * // Usage in a Hono app
 * import { pinoLogger } from "./middleware/pino-logger";
 *
 * const app = new Hono();
 * app.use(pinoLogger());
 *
 * app.get("/", (c) => {
 *   c.var.logger.info("This is an info log");
 *   return c.text("Hello Hono!");
 * });
 */
export function pinoLogger() {
	return logger({
		pino: pino(env.NODE_ENV === "production" ? undefined : pretty()),
		http: {
			reqId: () => crypto.randomUUID(),
		},
	});
}
