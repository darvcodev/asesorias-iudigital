# Asesorias IUDIGITAL Node.js y MongoDB

Esta es una aplicación creada utilizando Node.js, Express y MongoDB. Esta aplicación muestra cómo utilizar estas tecnologías para crear una aplicación web escalable y modular.

## Requerimientos

- [Node.js](https://nodejs.org/en/) instalado en su sistema.
- [MongoDB](https://www.mongodb.com/) instalado y en ejecución.

## Instalación

1. Clonar este repositorio en su sistema:
   ```
   git clone https://github.com/darvcodev/asesorias-iudigital.git
   ```
2. Moverse a la carpeta del proyecto:
   ```
   cd asesorias-iudigital
   ```
3. Instalar las dependencias del proyecto:
   ```
   npm install
   ```
4. Configurar la conexión a la base de datos en `config/database.js`.
5. Iniciar la aplicación:
   ```
   npm start
   ```
6. Acceder a la aplicación en `http://localhost:3000`.

## Funcionalidades

Esta aplicación de ejemplo incluye las siguientes funcionalidades:

- Creación, lectura, actualización y eliminación de proyectos académicos para estudiantes de pregrado y postgrado de la IUDIGITAL.
- Proyectos, universidades, clientes, tipo de poyecto y etapas.

## Estructura del proyecto

El proyecto se encuentra organizado de la siguiente manera:

- `app.js`: Archivo principal de la aplicación.
- `config/`: Contiene la configuración de la base de datos.
- `/controllers/`: Contiene los controladores de la aplicación por modulo.
- `/models/`: Contiene los modelos de la base de datos por modulo.
- `/routes/`: Contiene las rutas de la aplicación por modulo.
-

## Estrucutura de carpetas pensando en escalabilidad

```
.
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── config
│   └── database.js
├── lib
│   ├── clientes
│   │   ├── controllers
│   │   │   └── clienteController.js
│   │   ├── models
│   │   │   └── clienteModel.js
│   │   └── routes
│   │       └── clienteRoutes.js
│   ├── etapas
│   │   ├── controllers
│   │   │   └── etapaController.js
│   │   ├── models
│   │   │   └── etapaModel.js
│   │   └── routes
│   │       └── etapaRoutes.js
│   ├── proyectos
│   │   ├── controllers
│   │   │   └── proyectoController.js
│   │   ├── models
│   │   │   └── proyectoModel.js
│   │   └── routes
│   │       └── proyectoRoutes.js
│   ├── tipoProyectos
│   │   ├── controllers
│   │   │   └── tipoProyectoController.js
│   │   ├── models
│   │   │   └── tipoProyectoModel.js
│   │   └── routes
│   │       └── tipoProyectoRoutes.js
│   └── universidades
│       ├── controllers
│       │   └── universidadController.js
│       ├── models
│       │   └── universidadModel.js
│       └── routes
│           └── universidadRoutes.js

```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo `LICENSE` para obtener más detalles.
