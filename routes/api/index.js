import { setContentType } from "../../app/supports/helpers.js";
import v1 from "./v1/index.js";
import express from "express";

const router = express.Router();

router.use(
  "/v1",
  setContentType("application/vnd.api+json"),
  express.json({
    type: "application/vnd.api+json",
  }),
  v1,
);

export default router;
