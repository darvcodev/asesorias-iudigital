const TipoProyecto = require("../models/tipoProyectoModel");

exports.findAll = async (req, res, next) => {
  try {
    const tipoProyectos = await TipoProyecto.find();
    res.status(200).json(tipoProyectos);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const tipoProyecto = await TipoProyecto.findById(req.params.id).exec();
    if (!tipoProyecto) {
      return res
        .status(404)
        .send({ message: "Tipo de proyecto con este ID no existe 😔" });
    }
    res.send(tipoProyecto);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const tipoProyecto = new TipoProyecto(req.body);
    const savedTipoProyecto = await tipoProyecto.save();
    res.send(savedTipoProyecto);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!tipoProyecto) {
      return res
        .status(404)
        .send({
          message: "Tipo de proyecto no encontrado para ser ACTUALIZADO 😔",
        });
    }
    res.send(tipoProyecto);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const tipoProyecto = await TipoProyecto.findByIdAndRemove(req.params.id);
    if (!tipoProyecto) {
      return res
        .status(404)
        .send({
          message: "Tipo de proyecto no encontrado para ser ELIMINADO 😔",
        });
    }
    res.send({ message: "Tipo de proyecto eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
