import auth from "./auth.js";
import home from "./home.js";
import users from "./users.js";
import {Router} from "express";

const router = Router();

router.use(home);
router.use(users);
router.use(auth);

export default router;
