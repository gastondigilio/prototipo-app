const { Categories } = require("../../db");

async function getAllCategories(req, res, next) {
    
    try {

        const allCategories = await Categories.findAll({
            attributes: ["id", "name", "image"]
        });
        
        if (allCategories) {
            res.status(200).send(allCategories);
        } else {
            res.status(404).send("No products found");
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = { getAllCategories };