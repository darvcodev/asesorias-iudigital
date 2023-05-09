const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
  },
  fecha_actualizacion: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
