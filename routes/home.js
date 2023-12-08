import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Express" }));
router.get("/app-version", (req, res) => {
  return res.json({
    ["app-version"]: process.env.npm_package_version,
  });
});

export default router;
