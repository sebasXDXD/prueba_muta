import { Router } from "express";
import {
    loginCreateController,
    loginController
} from "../controllers/login.controller.js";

const router = Router();

router.post("/createUser", loginCreateController);
router.post("/login", loginController);
export default router;