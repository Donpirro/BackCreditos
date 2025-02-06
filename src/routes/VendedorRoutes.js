const express = require("express");
const router = express.Router();
const vendedorController = require("../controllers/vendedorController");

// Ruta para consultar datos por NIT
router.get("/consulta/:nit", vendedorController.getDataByNIT);

module.exports = router;