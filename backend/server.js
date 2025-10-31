const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Biencenido al servidor de Muebleria Jota');
})

app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error)
});

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    res.status(status).json({
        status:"Error",
        message:err.message
    })
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);    
})