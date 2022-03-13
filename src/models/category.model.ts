import { DataTypes, Model, Optional } from "sequelize";
import db from "../database/connection";
import Product from "./product.model";
interface CategoryAttributes {
  id: number;
  name: string;
}

interface CategoryCreatationAttributes extends Optional<CategoryAttributes, "id"> {}
interface CategoryInstance extends Model<CategoryAttributes, CategoryCreatationAttributes>, CategoryAttributes {}

const Category = db.define<CategoryInstance>(
  "category",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

Category.hasMany(Product, {
  foreignKey: "category",
  as: "categoryFull",
});
Product.belongsTo(Category, {
  foreignKey: "category",
  as: "categoryFull",
});

export default Category;
