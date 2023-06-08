const { Products, Categories } = require("../../db");

async function getFeaturedProduct(req, res, next) {

    const featuredProduct = await Products.findAll({
        attributes: ["id", "productName", "salePrice", "image1", "featuredProduct"],
        include: [
            {
                model: Categories,
                attributes: ["name"],
            },
        ],
        where: { featuredProduct: true }
    });

    if (featuredProduct) {
    
        res.status(200).send(featuredProduct);

    } else {

        res.status(404).send("No products found");
        
    }

}

module.exports = { getFeaturedProduct }