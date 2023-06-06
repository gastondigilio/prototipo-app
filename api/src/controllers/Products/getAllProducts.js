const { Productos, Categories } = require("../../db");

async function getProducts(req, res, next) {
    const { name } = req.query;
    try {
        const allProducts = async function getAllProducts() {
            let products = await Productos.findAll({
                attributes: ["id", "productName", "gender", "salePrice", "image1"],
                include: [
                    {
                        model: Categories,
                        attributes: ["name"],
                    },
                ],
            });
            return products;
        };
        if (name && allProducts) {
            const products = allProducts.filter(product =>
                product.productName.toLowerCase().includes(name.toLowerCase())
            );
            res.status(200).json(products);
        } else if (allProducts) {
            res.status(200).send(allProducts);
        } else {
            res.status(404).send("No products found");
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getProducts };