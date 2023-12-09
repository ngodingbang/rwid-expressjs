import { Router } from "express";
import { HomeController } from "../app/controllers/HomeController.js";
import { asyncHandler } from "../app/supports/helpers.js";

const router = Router();

router.get("/", asyncHandler(HomeController.index));
router.get("/app-version", asyncHandler(HomeController.appVersion));

export default router;
