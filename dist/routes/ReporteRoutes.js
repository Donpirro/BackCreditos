const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/ReporteController');

// Definir las rutas para los reportes
router.get('/', reporteController.obtenerTodosLosReportes);
router.get('/:id', reporteController.obtenerReportePorID);
module.exports = router;