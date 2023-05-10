const Universidad = require("../models/universidadModel");

exports.findAll = async (req, res, next) => {
  try {
    const universidades = await Universidad.find();
    res.status(200).json(universidades);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const universidad = await Universidad.findById(req.params.id).exec();
    if (!universidad) {
      return res
        .status(404)
        .send({ message: "Universidad con este ID no existe 😔" });
    }
    res.send(universidad);
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
    const universidad = await Universidad.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!universidad) {
      return res
        .status(404)
        .send({ message: "Universidad no encontrada para ser ACTUALIZADA 😔" });
    }
    res.send(universidad);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const universidad = await Universidad.findByIdAndRemove(req.params.id);
    if (!universidad) {
      return res
        .status(404)
        .send({ message: "Universidad no encontrada para ser ELIMINADA 😔" });
    }
    res.send({ message: "Universidad eliminada exitosamente" });
  } catch (error) {
    next(error);
  }
};
