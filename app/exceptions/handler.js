import { NotFoundException } from "./NotFoundException.js";

export class Handler {
  /**
   * @param {import("express").Express} app
   */
  constructor(app) {
    app.use(this.notFoundErrorHandler);
    app.use(this.errorHandler);
  }

  /**
   * @param {Error} err
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  errorHandler(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    return res.status(err.status || 500).render("error");
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
}
