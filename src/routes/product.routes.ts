import { Router } from "express";
import { ProductController } from "../controllers";
const router = Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

export default router;
