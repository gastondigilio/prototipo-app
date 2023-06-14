const { Products, Categories } = require("../../db");

async function patchModifyProduct(req, res, next) {
  try {
    const { id, productName, salePrice, price, image1, description, category, stock, gender } = req.body;

    const product = await Products.findOne({ where: { id } });

    if (!product) return res.status(404).send({ message: "Product not found" });
    await product.update({
      productName,
      price,
      salePrice,
      image1,
      description,
      stock,
      gender,
    });

    if (category) {
      const newCategory = await Categories.findOrCreate({ where: { name: category } });
      
      await product.setCategory(newCategory[0]);
    }

    return res.status(200).send({ message: "Product Modify" });
  } catch (error) {
    next(error);
  }
}

module.exports = { patchModifyProduct };