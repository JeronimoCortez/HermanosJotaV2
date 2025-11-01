import { Router } from "express";

import { listarProductos, listarProductoPorId, crearProducto, actualizarProducto, eliminarProducto } from "../controllers/ProductoController";

const router = Router

router.get('/', listarProductos);

router.get('/:id', listarProductoPorId)

router.post('/', crearProducto)

router.put('/:id', actualizarProducto)

router.delete('/:id', eliminarProducto)


module.exports = router;