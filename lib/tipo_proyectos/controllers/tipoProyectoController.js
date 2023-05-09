const Tipoproyecto = require("../models/tipoproyectoModel");

exports.findAll = async (req, res, next) => {
  try {
    const tipoproyectos = await Tipoproyecto.find();
    res.status(200).json(tipoproyectos);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const tipoproyecto = await Tipoproyecto.findById(req.params.id).exec();
    if (!tipoproyecto) {
      return res
        .status(404)
        .send({ message: "Tipo de proyecto con este ID no existe 😔" });
    }
    res.send(tipoproyecto);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const tipoproyecto = new Tipoproyecto(req.body);
    const savedTipoproyecto = await tipoproyecto.save();
    res.send(savedTipoproyecto);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const tipoproyecto = await Tipoproyecto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!tipoproyecto) {
      return res
        .status(404)
        .send({
          message: "Tipo de proyecto no encontrado para ser ACTUALIZADO 😔",
        });
    }
    res.send(tipoproyecto);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const tipoproyecto = await Tipoproyecto.findByIdAndRemove(req.params.id);
    if (!tipoproyecto) {
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
