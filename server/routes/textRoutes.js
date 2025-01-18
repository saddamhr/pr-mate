import express from "express";
import { generateTextHandler } from "../controllers/textGeneratorController.js";
import { validateRequest } from "../middlewares/validationMiddleware.js";

const router = express.Router();

// POST /api/generate
router.post("/generate", validateRequest, generateTextHandler);

export default router;
