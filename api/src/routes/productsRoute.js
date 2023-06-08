const { Router } = require("express");
const { getAllProducts } = require("../controllers/Products/getAllProducts");
const { createProduct } = require("../controllers/Products/createProduct");
const { getProductsFilter } = require("../controllers/Products/getProductsFilter");

const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/productsFilter", getProductsFilter);

module.exports = router;