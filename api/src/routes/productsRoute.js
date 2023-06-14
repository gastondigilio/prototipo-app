const { Router } = require("express");
const { getAllProducts } = require("../controllers/Products/getAllProducts");
const { getProductsActive } = require("../controllers/Products/getProductsActive");
const { createProduct } = require("../controllers/Products/createProduct");
const { getProductsFilter } = require("../controllers/Products/getProductsFilter");
const { getFeaturedProduct } = require("../controllers/Products/getFeaturedProduct");
const { getSaleProducts } = require("../controllers/Products/getSaleProducts");
const { patchModifyProduct } = require("../controllers/Products/patchModifyProduct");

const router = Router();

router.get("/", getProductsActive);
router.get("/allProducts", getAllProducts);
router.get("/productsFilter", getProductsFilter);
router.get("/featuredProduct", getFeaturedProduct);
router.get("/saleProducts", getSaleProducts);
router.post("/", createProduct);
router.patch("/", patchModifyProduct);

module.exports = router;