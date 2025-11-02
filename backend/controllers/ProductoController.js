import {Producto} from "../persistence/modelos/Producto.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    if (productos.length === 0) {
      return res
        .status(204)
        .json({ message: "No hay productos en la base de datos" });
    }

    return res.status(200).json(productos);
  } catch (error) {
    return res.status(500).json({ meesage: `ERROR: ${error}` });
  }
};

export const listarProductoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(204).json({ message: "No hay producto con id: ", id });
    }
    return res.status(200).json(producto);
  } catch (error) {
    return res.status(500).json({ meesage: `ERROR: ${error}` });
  }
};

export const crearProducto = async (req, res) => {
  const { nombre, descripcion, precio, imageUrl, categoria, stock, caracteristicas } = req.body;
  try {
    if (!nombre || !precio) {
      return res
        .status(400)
        .json({
          message: "Debe enviar los campos obligatorios (nombre, precio)",
        });
    }
    const nuevoProducto = new Producto({
      nombre: nombre,
      descripcion: descripcion || "",
      precio: precio,
      imageUrl: imageUrl || "",
      categoria: categoria || "",
      stock: stock || "",
      caracteristicas: caracteristicas || ""
    });

    const data = await nuevoProducto.save();
    return res.status(204).json(data);
  } catch (error) {
    return res.status(500).json(`ERROR: ${error}`);
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;

    const producto = await Producto.findByIdAndUpdate(id, datosActualizados, {
      new: true,
      runvalidators: true,
    });

    return res.status(201).json(producto);
  } catch (error) {
    return res.status(500).json({ message: `ERROR: ${error}` });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await Producto.findByIdAndDelete(id);
    return res.status(200).json({ message: "Proyecto eliminado con exito" });
  } catch (error) {
    return res.status(500).json({ message: `ERROR: ${error}` });
  }
};
