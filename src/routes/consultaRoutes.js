const express = require('express');
const router = express.Router();
const ConsultaController = require('../controllers/ConsultaController');

// GET Historial de consultas
router.get('/', ConsultaController.getHistorial);

// POST Nueva consulta
router.post('/', ConsultaController.registrarConsulta);

module.exports = router;