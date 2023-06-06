const { Categories } = require("../../db");

async function createCategories(req, res, next) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        Error: "El Nombre es requerido",
      });
    }
    const categories = await Categories.create({
      name,
    });
    return res.status(201).send({
      categories,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createCategories };