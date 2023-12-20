import home from "./home.js";
import users from "./users.js";
import express from "express";

const router = express.Router();

router.use(home);
router.use(users);

export default router;
