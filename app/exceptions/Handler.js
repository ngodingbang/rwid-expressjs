import { winstonLogger } from "../http/middleware/logger.js";
import { NotFoundException } from "./NotFoundException.js";
import ErrorStackParser from "error-stack-parser";
import { StatusCodes } from "http-status-codes";

export class Handler {
  /**
   * @param {import("express").Express} app
   */
  constructor(app) {
    app.use(this.notFoundErrorHandler);
    app.use(this.errorHandler);
  }

  /**
   * Catch 404 and forward to error handler.
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  notFoundErrorHandler(req, res, next) {
    return next(new NotFoundException());
  }

  /**
   * Error handler.
   *
   * @param {Error} err
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  errorHandler(err, req, res, next) {
    const isDevelopment = req.app.get("env") === "development";

    res.locals.message = err.message;
    res.locals.error = isDevelopment ? err : {};

    winstonLogger.error(err.stack);

    /** @type {import("http-status-codes").StatusCodes} */
    const code =
      err?.statusCode || err?.status || StatusCodes.INTERNAL_SERVER_ERROR;

    return res.status(code).json({
      errors: {
        code,
        message: err.message,
      },
      traces: isDevelopment ? ErrorStackParser.parse(err) : undefined,
    });
  }
}
