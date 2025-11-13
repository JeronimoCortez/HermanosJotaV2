const userRouter = require("express").Router();

const userService = require("../controllers/UserController");

userRouter.post("/", userService.registrarUsuario);

module.exports = { userRouter };
