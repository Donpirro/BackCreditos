const {
  Empresa,
  Cartera,
  Prospectados
} = require('../models');

// Buscar empresa por NIT
exports.buscarPorNIT = async (req, res) => {
  try {
    const nit = req.params.nit;
    console.log(`🔍 Buscando empresa con NIT: ${nit}`);
    const empresa = await Empresa.findOne({
      where: {
        NitCorrecto: nit
      },
      include: [{
        model: Cartera,
        as: 'Carteras'
      }, {
        model: Prospectados,
        as: 'Prospectados'
      }]
    });
    if (!empresa) {
      return res.status(404).json({
        success: false,
        message: 'Empresa no encontrada',
        details: `No existe registro para NIT: ${nit}`
      });
    }
    res.json({
      success: true,
      data: {
        empresa: {
          NitCorrecto: empresa.NitCorrecto,
          Nombre: empresa.Empresa,
          Estado: empresa.Estado,
          RepresentanteLegal: empresa.RepresentanteLegal,
          Contacto: {
            Telefono: empresa.Telefono,
            Correo: empresa.Correo
          }
        },
        cartera: empresa.Carteras.map(c => ({
          NumeroCredito: c.NumeroCredito,
          Monto: c.MontoDesembolsado,
          Saldo: c.SaldoCapital,
          Mora: c.DiasMora,
          UltimoPago: c.FechaUltAbono
        })),
        prospectados: empresa.Prospectados.map(p => ({
          Identificacion: p.NumeroIdentificacion,
          Nombre: p.NombreCliente,
          LineasCredito: {
            LI: {
              Monto: p.MontoMaximoLI,
              TasaAnual: p.TasaEfectivaAnualLI
            },
            CC: {
              Monto: p.MontoMaximoCC
            }
          }
        }))
      }
    });
  } catch (error) {
    console.error('❌ Error en consulta:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor',
      technicalMessage: error.message
    });
  }
};

// Obtener todas las empresas
exports.obtenerTodasLasEmpresas = async (req, res) => {
  try {
    console.log("📋 Obteniendo todas las empresas...");
    const empresas = await Empresa.findAll();
    res.json({
      success: true,
      data: empresas
    });
  } catch (error) {
    console.error('❌ Error al obtener empresas:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener las empresas',
      technicalMessage: error.message
    });
  }
};