const express = require("express");
const tipoProyectoController = require("../controllers/tipoProyectoController");

const router = express.Router();

router.get("/", tipoProyectoController.findAll);
router.get("/:id", tipoProyectoController.findOne);
router.post("/", tipoProyectoController.create);
router.put("/:id", tipoProyectoController.update);
router.delete("/:id", tipoProyectoController.delete);

module.exports = router;