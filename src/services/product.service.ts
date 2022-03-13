import { Op } from "sequelize";
import { ErrorExpection } from "../helpers";
import { Category, Product } from "../models";

const getAllProducts = async (keyword: string, page: number, limit: number, keyCategory: string) => {
  try {
    const category = await Category.findOne({ where: { name: keyCategory } });

    let options: any = {
      limit,
      offset: limit * (page - 1),
    };
    if (category) {
      options.where = {
        category: category.id,
      };
    }
    if (keyword) {
      options.where = {
        ...options.where,
        name: {
          [Op.like]: `%${keyword.toLowerCase()}%`,
        },
      };
    }
    const products = await Product.findAll({ ...options });
    const count = await Product.count(options.where ? { where: { ...options.where } } : {});
    console.log({ count });
    if (!products) {
      throw new ErrorExpection("Products not found", "ERROR - PRODUCTS NOT FOUND", 404);
    }
    const pages = Math.ceil(count / limit);
    return { products, page, pages };
  } catch (error) {
    console.log({ error });
    throw new ErrorExpection("Error geting produts", "ERROR - GET PRODUCTS", 500);
  }
};

const getProductById = async (id: number) => {
  try {
    console.log({ id });
    const product = await Product.findByPk(id);
    if (!product) {
      throw new ErrorExpection("Product not found", "ERROR - PRODUCT NOT FOUND", 404);
    }
    return product;
  } catch (error) {
    console.log({ error });
    throw new ErrorExpection("Error geting produt", "ERROR - GET PRODUCT", 500);
  }
};

export default {
  getAllProducts,
  getProductById,
};
