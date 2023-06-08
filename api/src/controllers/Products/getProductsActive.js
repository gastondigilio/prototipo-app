const { Products, Categories } = require("../../db");

async function getProductsActive(req, res, next) {
    
    try {

        const { offset } = req.body;

        const allProducts = await Products.findAndCountAll({
            attributes: ["id", "productName", "salePrice", "image1", "createdAt", "updatedAt"],
            include: [
                {
                    model: Categories,
                    attributes: ["name"],
                },
            ],
            where: { productState: true },
            offset,
            limit: 9
          });
        
        if (allProducts) {
            res.status(200).send(allProducts);
        } else {
            res.status(404).send("No products found");
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = { getProductsActive };