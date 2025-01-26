const { Empresa, Cartera, Prospectados } = require("../models");
const parseCSV = require("../utils/csvParser");

// Consultar datos relacionados por NIT
exports.getDataByNIT = async (req, res) => {
  const { nit } = req.params;

  try {
    const empresa = await Empresa.findOne({ where: { nit } });
    if (!empresa) {
      return res.status(404).json({ error: "Empresa no encontrada." });
    }

    const cartera = await Cartera.findAll({ where: { empresaNIT: nit } });
    const prospectados = await Prospectados.findAll({ where: { empresaNIT: nit } });

    res.status(200).json({ empresa, cartera, prospectados });
  } catch (error) {
    console.error("Error al obtener datos por NIT:", error);
    res.status(500).json({ error: "Error al consultar datos por NIT." });
  }
};
