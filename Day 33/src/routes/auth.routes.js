import { registerUser } from "../controllers/auth.controller.js";
import { Router } from "express";
import handleError from "../middleware/error.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.use(handleError);

export default router;