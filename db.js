const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/iudigital");
    console.log("Conexión a la DB exitosa");
  } catch (error) {
    console.log("Error de conexión a la DB", error.message);
  }
}

module.exports = { main };
