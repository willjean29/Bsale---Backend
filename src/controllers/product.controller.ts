import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services";
const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  const keyword = (req.query.keyword as string) || "";
  const category = (req.query.category as string) || "";
  const productsPerPage = 8;
  const pageCurrent = Number(req.query.page) || 1;
  try {
    const { products, pages, page } = await ProductService.getAllProducts(keyword, pageCurrent, productsPerPage, category);
    return res.json({
      message: "Products obtained correctly",
      data: {
        products,
        page,
        pages,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAllProducts,
};
