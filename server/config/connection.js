import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;
const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
