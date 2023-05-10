const express = require("express");
const proyectoController = require("../controllers/proyectoController");

const router = express.Router();

router.get("/", proyectoController.findAll);
router.get("/:id", proyectoController.findOne);
router.post("/", proyectoController.create);
router.put("/:id", proyectoController.update);
router.delete("/:id", proyectoController.delete);

module.exports = router;
