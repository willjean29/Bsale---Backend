import { Router } from "express";
import { CategoryController } from "../controllers";
const router = Router();

router.get("/", CategoryController.getAllCategories);

export default router;
