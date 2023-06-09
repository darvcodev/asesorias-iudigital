const express = require("express");

const { main } = require("./config/database");

// Rutas de la API
const proyectoRoutes = require("./src/proyectos/routes/proyectoRoutes");
const clienteRoutes = require("./src/clientes/routes/clienteRoutes");
const universidadRoutes = require("./src/universidades/routes/universidadRoutes");
const etapaRoutes = require("./src/etapas/routes/etapaRoutes");
const tipoproyecto = require("./src/tipo_proyectos/routes/tipoproyectoRoutes");

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
app.use("/tipo-proyectos", tipoproyecto);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);
