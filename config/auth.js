import { loadEnv } from "../app/supports/helpers.js";

loadEnv();

export default {
  username: process.env.AUTH_USERNAME,
  password: process.env.AUTH_PASSWORD,
};
