import { config } from "dotenv";
import { expand } from "dotenv-expand";

/**
 * @param {import("dotenv").DotenvConfigOptions} options
 */
export function loadEnv(options = undefined) {
  expand(config(options));
}

/**
 * @param {Function} fn
 */
export function asyncHandler(fn) {
  return function (...args) {
    /** @type {import("express").NextFunction} */
    const next = args[args.length - 1];

    return Promise.resolve(fn(...args)).catch(next);
  };
}

/**
 * Create a middleware to modify "Content-Type" of response header.
 *
 * @param {string} value
 */
export function setContentType(value) {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  return (req, res, next) => {
    res.contentType(value);

    return next();
  };
}
