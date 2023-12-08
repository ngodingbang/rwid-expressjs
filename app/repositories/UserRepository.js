import { model } from "../models/index.js";

/**
 * @typedef {import("../models/index.js").prisma.User} User
 */
export class UserRepository {
  static get model() {
    return model.user;
  }
}
