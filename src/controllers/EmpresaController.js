const { Empresa } = require('../models'); // 📌 despues se deben agregar las otras funciones

const buscarPorNIT = async (req, res) => {
    try {
        const { nit } = req.params;
        const empresa = await Empresa.findOne({ where: { NitCorrecto: nit } });
        console.log("📌 Empresa encontrada en la BD:", empresa);
        if (!empresa) {
            return res.status(404).json({ mensaje: "Empresa no encontrada" });
        }

        res.json(empresa);
    } catch (error) {
        console.error("Error al buscar la empresa:", error);
        res.status(500).json({ mensaje: "Error del servidor" });
    }
};

const obtenerTodasLasEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.json(empresas);
    } catch (error) {
        console.error("Error al obtener empresas:", error);
        res.status(500).json({ mensaje: "Error del servidor" });
    }
};

module.exports = { buscarPorNIT, obtenerTodasLasEmpresas };
