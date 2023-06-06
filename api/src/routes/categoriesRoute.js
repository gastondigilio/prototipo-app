const { Router } = require("express");
const { getAllCategories } = require("../controllers/Categories/getAllCategories");
const { createCategories } = require("../controllers/Categories/createCategories");

const router = Router();

router.get("/", getAllCategories);
router.post("/", createCategories);

module.exports = router;