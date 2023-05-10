const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect("mongodb://mongodatabase/iudigital");
    console.log("Conexión a la DB exitosa");
  } catch (error) {
    console.log("Error de conexión a la DB", error.message);
  }
}

module.exports = { main };
