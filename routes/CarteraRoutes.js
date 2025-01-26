const express = require("express");
const router = express.Router();
const Cartera = require("../models/Cartera");

router.get("/", async (req, res) => {
  try {
    const cartera = await Cartera.findAll();
    res.json(cartera);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la cartera" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevaCartera = await Cartera.create(req.body);
    res.status(201).json({ message: "Cartera creada con éxito", data: nuevaCartera });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la cartera" });
  }
});

module.exports = router;
