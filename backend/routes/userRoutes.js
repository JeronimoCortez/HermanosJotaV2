const userRouter = require("express").Router();

const userService = require("../controllers/UserController");

userRouter.post("/", userService.registrarUsuario);

userRouter.get("/", userService.listarUsuarios);

userRouter.put("/:id", userService.actualizarUsuario);

userRouter.put("/:id/cambiar-password", userService.cambiarContraseña);

userRouter.delete("/:id", userService.eliminarUsuario);

module.exports = { userRouter };
