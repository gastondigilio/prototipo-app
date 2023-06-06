const { Router } = require("express");
const { getAllProducts } = require("../controllers/Products/getAllProducts");
const { createProduct } = require("../controllers/Products/createProduct");

const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);

module.exports = router;