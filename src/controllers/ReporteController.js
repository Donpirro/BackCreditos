const db = require('../models');

exports.obtenerTodosLosReportes = async (req, res) => {
  try {
    const reportes = await db.Reporte.findAll();
    res.json(reportes);
  } catch (error) {
    console.error("Error al obtener reportes:", error);
    res.status(500).json({ message: "Error al obtener reportes", error });
  }
};

exports.obtenerReportePorID = async (req, res) => {
  try {
    const { id } = req.params;
    const reporte = await db.Reporte.findOne({ where: { id } });

    if (!reporte) {
      return res.status(404).json({ message: "Reporte no encontrado" });
    }

    res.json(reporte);
  } catch (error) {
    console.error("Error al obtener reporte:", error);
    res.status(500).json({ message: "Error al obtener reporte", error });
  }
};
