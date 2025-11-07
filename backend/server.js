require("dotenv").config();
const { connectDB } = require("./persistence/dbConfig.js");
const express = require("express");
const cors = require("cors");
const middleware = require("./middleware.js");
const { productosRouter } = require("./routes/productRoutes.js");

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

const originsList = [
  "https://hermanos-jota-v2.vercel.app/",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (originsList.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(middleware.logger);

app.use("/api/productos", productosRouter);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
