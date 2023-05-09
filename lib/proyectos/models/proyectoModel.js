const mongoose = require("mongoose");

const ProyectoSchema = new mongoose.Schema(
  {
    numero: {
      type: Number,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    fecha_iniciacion: {
      type: Date,
      required: true,
    },
    fecha_entrega: {
      type: Date,
      required: true,
    },
    valor: {
      type: Number,
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
    tipo_proyecto_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    cliente_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    universidad_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    etapa_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Proyecto", ProyectoSchema);
