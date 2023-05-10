const express = require("express");
const tipoproyectoController = require("../controllers/tipoproyectoController");

const router = express.Router();

router.get("/", tipoproyectoController.findAll);
router.get("/:id", tipoproyectoController.findOne);
router.post("/", tipoproyectoController.create);
router.put("/:id", tipoproyectoController.update);
router.delete("/:id", tipoproyectoController.delete);

module.exports = router;