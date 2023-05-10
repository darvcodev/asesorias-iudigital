const express = require("express");
const universidadController = require("../controllers/universidadController");

const router = express.Router();

router.get("/", universidadController.findAll);
router.get("/:id", universidadController.findOne);
router.post("/", universidadController.create);
router.put("/:id", universidadController.update);
router.delete("/:id", universidadController.delete);

module.exports = router;