const { Router } = require("express");
const { getAllListPrice } = require("../controllers/ListPrice/getAllListPrice");
const { postListPrice } = require("../controllers/ListPrice/postListPrice");

const router = Router();

router.get("/", getAllListPrice);
router.post("/", postListPrice);

module.exports = router;