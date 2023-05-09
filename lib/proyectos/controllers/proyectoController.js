const Proyecto = require("../models/proyectoModel");

exports.findAll = async (res, next) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findById(req.params.id).exec();
    if (!proyecto) {
      return res
        .status(404)
        .send({ message: "Proyecto con este ID no existe 😔" });
    }
    res.send(proyecto);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const proyecto = new Proyecto(req.body);
    const savedProyecto = await proyecto.save();
    res.send(savedProyecto);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!proyecto) {
      return res
        .status(404)
        .send({ message: "Proyecto no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(proyecto);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findByIdAndRemove(req.params.id);
    if (!proyecto) {
      return res
        .status(404)
        .send({ message: "Proyecto no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Proyecto eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
