const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routers/todo.router.js");

const app = express();
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT;

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("", router);

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});
