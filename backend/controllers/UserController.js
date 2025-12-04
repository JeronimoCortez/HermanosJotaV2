const User = require("../persistence/modelos/User");
const bcrypt = require("bcrypt");

const registrarUsuario = async (req, res) => {
  try {
    const { username, email, password, rol } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El email o nombre de usuario ya está en uso." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      rol,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      rol: savedUser.rol,
    });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor", error });
  }
};

const listarUsuarios = async (req, res, next) => {
  try {
    const usuarios = await User.find();
    if (usuarios.length === 0) {
      const error = new Error("No hay usuarios en la base de datos");
      error.status = 204;
      next(error);
    }

    return res.status(200).json(usuarios);
  } catch (err) {
    const error = new Error("Error al obtener usuarios");
    error.status = 400;
    next(error);
  }
};

const actualizarUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, rol } = req.body;

    const editedUser = {
      username,
      email,
      rol,
    };

    const usuario = await User.findByIdAndUpdate(id, editedUser, {
      new: true,
      runValidators: true,
    });

    return res.status(201).json(usuario);
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
};

const cambiarContraseña = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updatedPassword = {
      password: hashedPassword,
    };

    const usuario = await User.findByIdAndUpdate(id, updatedPassword, {
      new: true,
      runValidators: true,
    });

    return res.status(201).json(usuario);
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
};

const eliminarUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "Usuario eliminado con exito" });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
};

module.exports = {
  registrarUsuario,
  listarUsuarios,
  eliminarUsuario,
  actualizarUsuario,
  cambiarContraseña,
};
