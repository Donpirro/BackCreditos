const { Consulta, Usuario } = require('../models');

exports.getHistorial = async (req, res) => {
  try {
    console.log("Datos recibidos en req.body:", req.body); 
    const usuario = await Usuario.findOne({
      where: { Email: req.body.usuario },
      attributes: ['ID'],
      raw: true // Importante para obtener objeto plano
    });

    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const consultas = await Consulta.findAll({
      where: { UsuarioID: usuario.ID },
      order: [['Fecha', 'DESC']],
      limit: 5,
      raw: true
    });

    res.json(consultas);
  } catch (error) {
    console.error('Error en getHistorial:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.registrarConsulta = async (req, res) => {
  try {
    console.log("Datos recibidos en req.body:", req.body);
    if (!req.body.usuario) {
      return res.status(400).json({ error: "El campo 'usuario' es obligatorio" });
    }
    const usuario = await Usuario.findOne({
      where: { Email: req.body.Email },
      attributes: ['ID'],
      raw: true
    });

    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const nuevaConsulta = await Consulta.create({
      Fecha: new Date(),
      UsuarioID: usuario.ID,
      EmpresaNIT: req.body.nit,
      Resultado: req.body.resultado
    });

    res.status(201).json(nuevaConsulta);
  } catch (error) {
    console.error('Error en registrarConsulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};