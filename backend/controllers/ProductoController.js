const Producto = require("../persistence/modelos/Producto.js");

const listarProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    if (productos.length === 0) {
      const error = new Error("No hay productos en la base de datos");
      error.status = 204;
      next(error);
    }

    return res.status(200).json(productos);
  } catch (err) {
    const error = new Error("Error al obtener productos");
    error.status = 400;
    next(error);
  }
};

const listarProductoPorId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      const error = new Error(`No se encotro producto con id: ${id}`);
      error.status = 404;
      next(error);
      return;
    }
    return res.status(200).json(producto);
  } catch (err) {
    const error = new Error("Error al obtener los productos");
    error.status = 500;
    next(error);
  }
};

const crearProducto = async (req, res, next) => {
  const {
    nombre,
    descripcion,
    precio,
    imageUrl,
    categoria,
    stock,
    caracteristicas,
  } = req.body;
  try {
    if (!nombre || !precio) {
      return res.status(400).json({
        message: "Debe enviar los campos obligatorios (nombre, precio)",
      });
    }
    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      imageUrl,
      categoria,
      stock,
      caracteristicas,
    });

    const data = await nuevoProducto.save();
    return res.status(201).json(data);
  } catch (err) {
    const error = new Error(err.message);
    error.status = 401;
    next(error);
  }
};

const actualizarProducto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;

    const producto = await Producto.findByIdAndUpdate(id, datosActualizados, {
      new: true,
      runValidators: true,
    });

    return res.status(201).json(producto);
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
};

const eliminarProducto = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Producto.findByIdAndDelete(id);
    return res.status(200).json({ message: "Proyecto eliminado con exito" });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    next(error);
  }
};

module.exports = {
  listarProductos,
  listarProductoPorId,
  crearProducto,
  eliminarProducto,
  actualizarProducto,
};
