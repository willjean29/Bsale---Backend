import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../services";

const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await CategoryService.getAllCategories();
    return res.json({
      message: "Categories obtained correctly",
      data: {
        categories,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAllCategories,
};
