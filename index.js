const express = require("express");
const { main } = require("./db");

// Inicializar la app de express
const app = express();

// Conectar a la base de datos
main().catch((err) => console.log(err));

// Configurar middleware para parsear JSON
app.use(express.json());


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`));
