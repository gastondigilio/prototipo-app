const { Router } = require('express');
const express = require("express");
const productsRoute = require("./productsRoute");
const categoriesRoute = require("./categoriesRoute");
const listPriceRoute = require("./listPriceRoute");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(express.urlencoded({ extended: true, limit: "50mb" }));
router.use(express.json({ limit: "50mb" }));

// Configurar los routers
router.use("/products", productsRoute);
router.use("/categories", categoriesRoute);
router.use("/listPrice", listPriceRoute);


module.exports = router;
