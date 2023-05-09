const express = require("express");
const etapaController = require("../controllers/etapaController");

const router = express.Router();

router.get("/", etapaController.findAll);
router.get("/:id", etapaController.findOne);
router.post("/", etapaController.create);
router.put("/:id", etapaController.update);
router.delete("/:id", etapaController.delete);

module.exports = router;