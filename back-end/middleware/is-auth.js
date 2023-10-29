const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not Authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader;
  let decoudedToken;
  try {
    decoudedToken = jwt.verify(token, "secretsecret");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decoudedToken) {
    const error = new Error("Not Authenticated.");
    error.statusCode = 401;
    throw error;
  }
  next();
};
