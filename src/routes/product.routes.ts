import { Router } from "express";
import { ProductController } from "../controllers";
const router = Router();

router.get("/", ProductController.getAllProducts);

export default router;
