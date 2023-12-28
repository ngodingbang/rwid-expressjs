import { model as defaultModel } from "../models/index.js";

/**
 * @typedef {import("../models/index.js").prisma.User} User
 * @typedef {import("../models/index.js").prisma.Prisma.UserDelegate} Model
 */
export class UserRepository {
  /** @type {Model} */
  model;

  /**
   * @param {Model} [model]
   */
  constructor(model) {
    this.model = model || defaultModel.user;
  }
}
