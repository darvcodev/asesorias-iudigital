const express = require("express");
const clienteController = require("../controllers/clienteController");

const router = express.Router();

router.get("/", clienteController.findAll);
router.get("/:id", clienteController.findOne);
router.post("/", clienteController.create);
router.put("/:id", clienteController.update);
router.delete("/:id", clienteController.delete);

module.exports = router;
