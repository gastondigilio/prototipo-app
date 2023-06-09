const { Products, Categories } = require("../../db");

async function getAllProducts(req, res, next) {
    
    try {

        const { offset } = req.body;

        const allProducts = await Products.findAndCountAll({
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

module.exports = { getAllProducts };