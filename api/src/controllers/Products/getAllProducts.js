const { Productos, Categories } = require("../../db");

async function getProducts(req, res, next) {
    
    try {

        const allProducts = await Productos.findAll({
            attributes: ["id", "productName", "gender", "salePrice", "image1"],
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

module.exports = { getProducts };