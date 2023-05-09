const mongoose = require("mongoose");

const TipoproyectoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    fecha_creacion: {
      type: Date,
      default: Date.now,
    },
    fecha_actualizacion: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("tipo_proyectos", TipoproyectoSchema);
