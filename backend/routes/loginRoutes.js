const loginRouter = require("express").Router();

const loginService = require("../controllers/LoginController");

loginRouter.post("/", loginService.usuarioLogin);

module.exports = { loginRouter };
