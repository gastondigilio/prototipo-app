const { Products, Categories } = require("../../db");

async function getSaleProducts(req, res, next) {

    const saleProducts = await Products.findAll({
        attributes: ["id", "productName", "salePrice", "image1", "saleProduct"],
        include: [
            {
                model: Categories,
                attributes: ["name"],
            },
        ],
        where: { saleProduct: true }
    });

    if (saleProducts) {
    
        res.status(200).send(saleProducts);

    } else {

        res.status(404).send("No products found");
        
    }

}

module.exports = { getSaleProducts }