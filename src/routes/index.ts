import { Router } from "express";
import ProductRoutes from "./product.routes";
import CategoryRoutes from "./category.routes";

const router = Router();

router.use("/products", ProductRoutes);
router.use("/categories", CategoryRoutes);

export default router;
