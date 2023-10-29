const DUMMY_DATA = require("../data/dummy");
const jwt = require("jsonwebtoken");

exports.getData = (req, res, next) => {
  try {
    const { id } = req.params;
    const user = DUMMY_DATA.find((std) => std.matricula === id);
    if (!user) throw new Error("User does not exists");
    res
      .status(200)
      .json({ name: user.name, email: user.email, matricula: user.matricula });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Validating user exists
    const user = DUMMY_DATA.filter((user) => user.email === email);
    if (user.length < 1) throw new Error("User not found");

    // Validating the password is the same
    if (user[0].password !== password)
      throw new Error("Invalid email or password");

    // Creating the token
    const token = jwt.sign(
      {
        email: user[0].email,
        userId: user[0].matricula,
      },
      "secretsecret",
      { expiresIn: "1h" }
    );

    // Sending the response
    res.status(200).json({ token, userId: user[0].matricula });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
