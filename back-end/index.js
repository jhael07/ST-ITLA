const express = require("express");
const bodyParser = require("body-parser");

const authRoute = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.use("/api", authRoute);

app.use((error, req, res, next) => {
  console.log(error);
  const { statusCode } = error;
  const { message } = error;
  const { data } = error;
  res.status(statusCode).json({ message, data });
});

app.listen(8000, () => {
  console.log("Application running on port 8000");
});
