const mongoose = require("mongoose");

const productosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ["sala", "dormitorio", "comedor", "oficina"],
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  caracteristicas: {
    type: [String],
    validate: {
      validator: (arr) => arr.length >= 3 && arr.length <= 6,
      message:
        "Es necesario tener al menos tres características distintas pero no más de seis",
    },
  },
});

const Producto = mongoose.model("Producto", productosSchema);
module.exports = Producto;
