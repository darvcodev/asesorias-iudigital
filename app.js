const express = require("express");

const { main } = require("./config/database");

const proyectoRoutes = require("./lib/proyectos/routes/proyectoRoutes");
const clienteRoutes = require("./lib/clientes/routes/clienteRoutes");
const universidadRoutes = require("./lib/universidades/routes/universidadRoutes");
const etapaRoutes = require("./lib/etapas/routes/etapaRoutes");

// Inicializar la app de express
const app = express();

// Conectar a la base de datos
main().catch((err) => console.log(err));

// Configurar middleware para parsear JSON
app.use(express.json());

// Configurar rutas de la API
app.use("/proyectos", proyectoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/universidades", universidadRoutes);
app.use("/etapas", etapaRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);
