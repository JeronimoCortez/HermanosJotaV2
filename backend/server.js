import "dotenv/config"
import connectDB from "./persistence/dbConfig.js";
import express from "express"
import {productRoutes} from './routes/productRoutes.js'


const app = express();

const PORT = process.env.PORT || 4000;

connectDB()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de Muebleria Jota');
})

// app.use((req, res, next) => {
//     const error = new Error('Ruta no encontrada');
//     error.status = 404;
//     next(error)
// });

// app.use((err, req, res, next)=>{
//     const status = err.status || 500;
//     res.status(status).json({
//         status:"Error",
//         message:err.message
//     })
// })

app.use('/api/productos', productRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);    
})