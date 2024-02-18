import express from "express";
import cors from "cors";
import Config from "./config/default.js";
import { mongodb } from "./db.js";

const PORT = Config.port;

const app = express();

app.use(cors());

//DB
const DB = new mongodb();
await DB.Connect();

app.get("/api/authors/", (req, res) => {
  res.status(200);
  res.json({ msg: "List of authors" });
});

app.get("/api/authors/:id", async (req, res, next) => {
  res.send({ data: [{ login: "123", password: "123" }, { name: "Ivan" }] });
  res.sendStatus(200);
  next();
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
