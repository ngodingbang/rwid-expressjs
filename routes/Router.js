import api from "./api/index.js";
import express from "express";

export class Router {
  /**
   * @param {import("express").Express} app
   */
  constructor(app) {
    app.use(this.generateRouter());
  }

  generateRouter() {
    const router = express.Router();

    router.use(api);

    return router;
  }
}
