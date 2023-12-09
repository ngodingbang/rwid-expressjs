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
