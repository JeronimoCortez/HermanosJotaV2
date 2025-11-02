import express from "express";

import { listarProductos, listarProductoPorId, crearProducto, actualizarProducto, eliminarProducto } from "../controllers/ProductoController.js";

export const productRoutes = express.Router();

productRoutes.get('/', listarProductos);

productRoutes.get('/:id', listarProductoPorId)

productRoutes.post('/', crearProducto)

productRoutes.put('/:id', actualizarProducto)

productRoutes.delete('/:id', eliminarProducto)

