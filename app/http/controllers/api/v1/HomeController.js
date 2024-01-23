import config from "../../../../../config/app.js";
import { Controller } from "../../Controller.js";

export class HomeController extends Controller {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  async index(req, res, next) {
    return res.json({ message: "Express" });
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  async appVersion(req, res) {
    return res.json({
      ["app-version"]: config.version,
    });
  }
}
