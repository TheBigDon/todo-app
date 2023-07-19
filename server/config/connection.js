const dotenv = require("dotenv");
const Sequelize = require("sequelize");

dotenv.config();
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;
const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = connection;
