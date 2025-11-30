const User = require("../persistence/modelos/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usuarioLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        rol: user.rol,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { usuarioLogin };
