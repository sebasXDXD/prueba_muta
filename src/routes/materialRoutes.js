import { Router } from "express";
import { authenticateToken } from "../lib/authenticateToken.js";
import {
    materialCreateController,
    materialShowController,
    materialConsultController,
    materialDeleteController,
    materialEditController
} from "../controllers/materials.controller.js";
 
const router = Router();

router.get("/materials", authenticateToken,authenticateToken, materialShowController);
router.get("/material/:id",authenticateToken, materialConsultController);
router.post("/materials",authenticateToken, materialCreateController);
router.put("/materials/:id",authenticateToken, materialEditController);
router.delete("/materials/:id",authenticateToken, materialDeleteController);
export default router;