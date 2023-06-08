const { Products, Categories } = require("../../db");

async function getProductsFilter(req, res, next) {

    const { productName, categoryId } = req.body
    // console.log('hola', req.body)

    
    const project = await Products.findOne({ where: { productName, categoryId } });

    if (project === null) {
        
        console.log('Not found!');

    } else {

        console.log(project instanceof Products); // true

        console.log(project.productName, project.categoryId); // 'My Title'

    }

}

module.exports = { getProductsFilter }