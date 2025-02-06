    const express = require('express');
    const { buscarPorNIT, obtenerTodasLasEmpresas } = require('../controllers/EmpresaController');

    const router = express.Router();

    console.log("📌 Rutas de Empresas activadas...");

    // Ruta para buscar empresa por NIT
    router.get('/:nit', buscarPorNIT);

// Ruta para obtener todas las empresas
router.get('/', obtenerTodasLasEmpresas);

module.exports = router;
