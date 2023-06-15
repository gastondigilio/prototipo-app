const { Products, Categories } = require("../../db");

async function createProduct(req, res, next) {
  try {
    const { productName, salePrice, image1, description, categories, image } = req.body;

    const newProducts = await Products.create({
      productName,
      salePrice,
      image1,
      description,
    });

    const newCategory = await Categories.findOrCreate({ where: { name: categories, image: image } });

    await newProducts.setCategory(newCategory[0]);

    res.status(200).json(newProducts);
  } catch (err) {
    next(err);
  }
}

module.exports = { createProduct };