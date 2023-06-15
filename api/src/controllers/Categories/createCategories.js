const { Categories } = require("../../db");
const { Op } = require('sequelize');

async function createCategories(req, res, next) {

  try {

    const { name, image } = req.body;

    if (!name) {

      return res.status(400).send({

        Error: "El Nombre es requerido",

      });

    }

    const categories = await Categories.findOrCreate({

      where: {

        name,
        image

      }

    });

    return res.status(201).send({

      categories,

    });

  } catch (error) {

    next(error);

  }
  
}

module.exports = { createCategories };