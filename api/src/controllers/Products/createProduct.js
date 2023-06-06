const { Productos, Categories } = require("../../db");

async function createProduct(req, res, next) {
  try {
    const { productName, salePrice, image1, description, categories } = req.body;

    const newProductos = await Productos.create({
      productName,
      salePrice,
      image1,
      description,
    });

    const newCategory = await Categories.findOrCreate({ where: { name: categories } });

    await newProductos.setCategory(newCategory[0]);

    res.status(200).json(newProductos);
  } catch (err) {
    next(err);
  }
}

module.exports = { createProduct };