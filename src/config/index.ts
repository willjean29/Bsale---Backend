import dotenv from "dotenv";

dotenv.config();
const environments = {
  DB_NAME: process.env.DB_NAME || "",
  DB_HOST: process.env.DB_HOST || "",
  DB_PASS: process.env.DB_PASS || "",
  DB_USER: process.env.DB_USER || "",
};

export default environments;
