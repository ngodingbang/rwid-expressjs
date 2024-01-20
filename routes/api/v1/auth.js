import { Router } from "express";
import config from "../../../config/auth.js";
const router = Router();

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (username === config.username && password === config.password) {
    return res.json({
      message: "succes",
    });
  } else {
    return res.status(401).json({
      message: "incorrect username or password",
    });
  }
});

export default router;
