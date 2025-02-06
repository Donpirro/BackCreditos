const express = require("express");
const router = express.Router();
const Prospectado = require("../models/Prospectado"); // Importar el modelo de Sequelize

// GET: Obtener todos los prospectados
router.get("/", async (req, res) => {
  try {
    const prospectado = await Prospectado.findAll();
    res.json(prospectado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los prospectados" });
  }
});

// POST: Crear un nuevo prospectado
router.post("/", async (req, res) => {
  try {
    const nuevoProspectado = await Prospectado.create(req.body);
    res.status(201).json({ message: "Prospectado creado con éxito", data: nuevoProspectado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el prospectado" });
  }
});

// PUT: Actualizar un prospectado por su ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Prospectado.update(req.body, { where: { NumeroIdentificacion: id } });
    if (updated) {
      res.json({ message: "Prospectado actualizado con éxito" });
    } else {
      res.status(404).json({ error: "Prospectado no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el prospectado" });
  }
});

// DELETE: Eliminar un prospectado por su ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Prospectado.destroy({ where: { NumeroIdentificacion: id } });
    if (deleted) {
      res.json({ message: "Prospectado eliminado con éxito" });
    } else {
      res.status(404).json({ error: "Prospectado no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el prospectado" });
  }
});

module.exports = router;
