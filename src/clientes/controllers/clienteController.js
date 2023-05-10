const Cliente = require("../models/clienteModel");

exports.findAll = async (req, res, next) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id).exec();
    if (!cliente) {
      return res
        .status(404)
        .send({ message: "Cliente con este ID no existe 😔" });
    }
    res.send(cliente);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const cliente = new Cliente(req.body);
    const savedCliente = await cliente.save();
    res.send(savedCliente);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cliente) {
      return res
        .status(404)
        .send({ message: "Cliente no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(cliente);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndRemove(req.params.id);
    if (!cliente) {
      return res
        .status(404)
        .send({ message: "Cliente no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
