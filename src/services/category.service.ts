import { Category } from "../models";
import { ErrorExpection } from "../helpers";
const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    if (!categories) {
      throw new ErrorExpection("Categories not found", "ERROR - CATEGORIES NOT FOUND", 404);
    }
    return categories;
  } catch (error) {
    console.log({ error });
    throw new ErrorExpection("Error geting categories", "ERROR - GET CATEGORIES", 500);
  }
};

export default {
  getAllCategories,
};
