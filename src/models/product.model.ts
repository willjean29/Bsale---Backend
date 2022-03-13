import { DataTypes, Model, Optional } from "sequelize";
import db from "../database/connection";
import Category from "./category.model";

interface ProductAttributes {
  id: number;
  name: string;
  url_image: string;
  price: number;
  discount: number;
  category: number;
}

interface ProductCreatationAttributes extends Optional<ProductAttributes, "id"> {}
interface ProductInstance extends Model<ProductAttributes, ProductCreatationAttributes>, ProductAttributes {}

const Product = db.define<ProductInstance>(
  "product",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING,
    },
    url_image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

export default Product;
