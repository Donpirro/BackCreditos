const express = require('express');
const Empresa = require('../models/Empresa');

const router = express.Router();

// Obtener todas las empresas
router.get('/', async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        //res.json(empresas);
        res.json([
            { Empresa: "Empresa 1", Nit: "123456", Estado: "Activo" },
            { Empresa: "Empresa 2", Nit: "654321", Estado: "Inactivo" },
          ]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Crear una nueva empresa
router.post('/', async (req, res) => {
    try {
        const nuevaEmpresa = await Empresa.create(req.body);
        res.json(nuevaEmpresa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
