const express = require("express");
const authController = require("../controllers/auth");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/:id", isAuth, authController.getData);

router.post("/login", authController.login);

module.exports = router;
