import express from "express";
import register from "../controllers/Auth/register.js";
import login from "../controllers/Auth/login.js";

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);

export default router;
