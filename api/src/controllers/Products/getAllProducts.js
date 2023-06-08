const { Products, Categories } = require("../../db");

async function getAllProducts(req, res, next) {
    
    try {

        const allProducts = await Products.findAll({
            attributes: ["id", "productName", "salePrice", "image1"],
            include: [
                {
                    model: Categories,
                    attributes: ["name"],
                },
            ],
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

module.exports = { getAllProducts };