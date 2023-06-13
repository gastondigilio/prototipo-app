const { ListPrice } = require("../../db");

async function getAllListPrice(req, res, next) {
    
    try {

        const allListPrice = await ListPrice.findAll({
            attributes: ["id", "name", "porcenList"]
        });
        
        if (allListPrice) {
            res.status(200).send(allListPrice);
        } else {
            res.status(404).send("No products found");
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = { getAllListPrice };