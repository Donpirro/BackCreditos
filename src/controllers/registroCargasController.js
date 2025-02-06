const { RegistroCargas } = require("../models");

// Registrar una carga
exports.logCarga = async (req, res) => {
  try {
    const registro = await RegistroCargas.create(req.body);
    res.status(201).json(registro);
  } catch (error) {
    console.error("Error al registrar carga:", error);
    res.status(500).json({ error: "Error al registrar carga." });
  }
};

// Obtener todos los registros de carga
exports.getAllCargas = async (req, res) => {
  try {
    const registros = await RegistroCargas.findAll();
    res.status(200).json(registros);
  } catch (error) {
    console.error("Error al obtener registros de carga:", error);
    res.status(500).json({ error: "Error al obtener registros de carga." });
  }
};
