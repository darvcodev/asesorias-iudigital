const Etapa = require("../models/etapaModel");

exports.findAll = async (req, res, next) => {
  try {
    const etapas = await Etapa.find();
    res.status(200).json(etapas);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const etapa = await Etapa.findById(req.params.id).exec();
    if (!etapa) {
      return res
        .status(404)
        .send({ message: "Etapa con este ID no existe 😔" });
    }
    res.send(etapa);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const universidad = new Universidad(req.body);
    const savedUniversidad = await universidad.save();
    res.send(savedUniversidad);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const etapa = await Etapa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!etapa) {
      return res
        .status(404)
        .send({ message: "Etapa no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(etapa);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const etapa = await Etapa.findByIdAndRemove(req.params.id);
    if (!etapa) {
      return res
        .status(404)
        .send({ message: "Etapa no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Etapa eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
