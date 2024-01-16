import { loadEnv } from "../app/supports/helpers.js";

loadEnv();

const port = process.env.APP_PORT || "3000";
/** @type {"production" | "development" | "testing"} */
const node_env = process.env.NODE_ENV;

export default {
  port,
  timezone: process.env.TZ || "Asia/Jakarta",
  url: process.env.URL || `http://localhost:${port}`,
  name: process.env.APP_NAME || "RWID Express.js",
  key: process.env.APP_KEY,
  /** @type {import("../app/supports/Encrypter.js").CipherType} */
  cipher: "aes-256-cbc",
  version: process.env.npm_package_version,

  /** @type {"OFF" | "ON"} */
  mute_logger: process.env.MUTE_LOGGER || "OFF",
  node_env,
  maximum_request_body_size: process.env.MAXIMUM_REQUEST_BODY_SIZE || "100kb",
  ratelimit_maximum_request: Number(
    process.env.RATELIMIT_MAXIMUM_REQUEST || "100",
  ),
  /** @description in miliseconds */
  ratelimit_expire_time: Number(process.env.RATELIMIT_EXPIRE_TIME || "900000"),

  is_production: node_env === "production",
  is_development: node_env === "development",
  is_testing: node_env === "testing",
  disable_console_when_error:
    (process.env.DISABLE_CONSOLE_WHEN_ERROR || "false") === "true",
  disable_prisma_console:
    (process.env.DISABLE_PRISMA_CONSOLE || "false") === "true",
};
