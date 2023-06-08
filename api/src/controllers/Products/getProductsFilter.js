const { Products, Categories } = require("../../db");

async function getProductsFilter(req, res, next) {

    try {

        const { productName, category, idProduct } = req.body
    
        let project = [];
    
        if (productName) {
    
            project = await Products.findOne({ where: { productName } });
            
        } else if (category) {
    
            const { id, name } = await Categories.findOne({ where: {name: category}});
    
            project = await Products.findAll({
                attributes: ["id", "productName", "salePrice", "image1"],
                include: [
                    {
                        model: Categories,
                        attributes: ["name"],
                    },
                ],
                where: { categoryId: id }
            });
            
        } else if (idProduct) {
    
            project = await Products.findByPk(idProduct);
            
        }
        
        if (project) {
    
            res.status(200).send(project);
    
        } else {
    
            res.status(404).send("No products found");
            
        }
        
    } catch (error) {

        console.log(error)
        
    }

}

module.exports = { getProductsFilter }