require("dotenv").config();
const { connectDB } = require("./persistence/dbConfig.js");
const express = require("express");
const cors = require("cors");
const middleware = require("./middleware.js");
const { productosRouter } = require("./routes/productRoutes.js");

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());

app.use(express.json());
app.use(middleware.logger);

app.use("/api/productos", productosRouter);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
