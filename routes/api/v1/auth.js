import { Router } from "express";
import config from "../../../config/auth.js";
const router = Router();

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (!(username === config.username && password === config.password)) {
    throw new Error("incorrect username or password");
  }

  return res.json({ message: "succes" });
});

export default router;
