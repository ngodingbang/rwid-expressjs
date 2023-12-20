import config from "../../config/app.js";
import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import { createLogger, format, transports } from "winston";

export class Handler {
  /**
   * @param {import("express").Express} app
   */
  constructor(app) {
    app.use(this.logger());
    app.use(this.urlencoded());
    app.use(cookieParser());
  }

  logger() {
    return morgan(
      ":method :url :status :res[content-length] - :response-time ms",
      {
        // eslint-disable-next-line no-unused-vars
        skip: (req, res) => config.mute_logger === "ON",
        stream: {
          write: message =>
            createLogger({
              level: "http",
              format: format.combine(
                format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
                format.json(),
              ),
              transports: new transports.Console({}),
            }).http(message.trim()),
        },
      },
    );
  }

  urlencoded() {
    return express.urlencoded({
      extended: false,
      limit: config.maximum_request_body_size,
    });
  }
}
