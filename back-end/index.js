const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoute = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.use(cors());

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
