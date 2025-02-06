const express = require("express");
const router = express.Router();
const RegistroCargas = require("../models/RegistroCargas");

router.get("/", async (req, res) => {
  try {
    const registros = await RegistroCargas.findAll();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los registros de cargas" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoRegistro = await RegistroCargas.create(req.body);
    res.status(201).json({ message: "Registro de carga creado con éxito", data: nuevoRegistro });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el registro de carga" });
  }
});

module.exports = router;