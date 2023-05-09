const mongoose = require("mongoose");

const UniversidadSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
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

module.exports = mongoose.model("Universidad", UniversidadSchema);
