import { Router } from "express";
import { authenticateToken } from "../lib/authenticateToken.js";
import {
    calculareOptimalRouteController,
} from "../controllers/calculate.controller.js";
 
const router = Router();

router.post("/calculate_optimal", authenticateToken,calculareOptimalRouteController);

export default router;