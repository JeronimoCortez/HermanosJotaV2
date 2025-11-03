const productosRouter = require("express").Router();

const productService = require("../controllers/ProductoController.js");

productosRouter.get("/", productService.listarProductos);

productosRouter.get("/:id", productService.listarProductoPorId);

productosRouter.post("/", productService.crearProducto);

productosRouter.put("/:id", productService.actualizarProducto);

productosRouter.delete("/:id", productService.eliminarProducto);

module.exports = { productosRouter };
