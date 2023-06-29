import { Router } from "express";
import { authenticateToken } from "../lib/authenticateToken.js";
import {
    collectionCreateController,
    collectionShowController,
    collectionConsultController,
    collectionDeleteController,
    collectionEditController
} from "../controllers/collection.controller.js";
 
const router = Router();

router.get("/collections", authenticateToken,collectionShowController);
router.get("/collection/:id",authenticateToken, collectionConsultController);
router.post("/collection",authenticateToken, collectionCreateController);
router.put("/collection/:id",authenticateToken, collectionEditController);
router.delete("/collection/:id",authenticateToken, collectionDeleteController);
export default router;