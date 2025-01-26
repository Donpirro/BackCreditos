const { Empresa, Cartera, Prospectados } = require("../models");
const { parseCSV } = require("../utils/csvParser");

// Subir archivo para Empresas
exports.uploadEmpresa = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No se subió ningún archivo." });

    const empresas = await parseCSV(file.path);
    await Empresa.bulkCreate(empresas);

    res.status(200).json({ message: "Archivo de empresas cargado exitosamente." });
  } catch (error) {
    console.error("Error al cargar empresas:", error);
    res.status(500).json({ error: "Error al cargar el archivo de empresas." });
  }
};

// Subir archivo para Cartera
exports.uploadCartera = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No se subió ningún archivo." });

    const carteras = await parseCSV(file.path);
    await Cartera.bulkCreate(carteras);

    res.status(200).json({ message: "Archivo de carteras cargado exitosamente." });
  } catch (error) {
    console.error("Error al cargar carteras:", error);
    res.status(500).json({ error: "Error al cargar el archivo de carteras." });
  }
};

// Subir archivo para Prospectados
exports.uploadProspectados = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No se subió ningún archivo." });

    const prospectados = await parseCSV(file.path);
    await Prospectados.bulkCreate(prospectados);

    res.status(200).json({ message: "Archivo de prospectados cargado exitosamente." });
  } catch (error) {
    console.error("Error al cargar prospectados:", error);
    res.status(500).json({ error: "Error al cargar el archivo de prospectados." });
  }
};
