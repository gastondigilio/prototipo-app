const { Router } = require("express");
const { getProducts } = require("../controllers/Products/getAllProducts");

const router = Router();

router.get("/", getProducts);

module.exports = router;