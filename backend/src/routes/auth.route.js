import express from "express";
import { login, logout, signup, onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.post("/onboarding", protectRoute, onboard) // protected route just see check if the user is authenticated or not

export default router