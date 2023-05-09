const Cliente = require("../models/clienteModel");

exports.findAll = async (req, res, next) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    next(error);
  }
};
