import { Sequelize } from "sequelize";
import env from "../config";
const connection = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  dialect: "mysql",
});

export default connection;
