import dotenv from "dotenv";

dotenv.config();
const environments = {
  DB_NAME: process.env.DB_NAME || "",
  DB_HOST: process.env.DB_HOST || "",
  DB_PASS: process.env.DB_PASS || "",
  DB_USER: process.env.DB_USER || "",
  PORT: process.env.PORT || 4000,
  HOST: process.env.HOST || "0.0.0.0",
};

export default environments;
