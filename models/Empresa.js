const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Empresa", {
    AcuerdoNo: { type: DataTypes.STRING },
    Empresa: { type: DataTypes.STRING, allowNull: false },
    NitCorrecto: { type: DataTypes.STRING, primaryKey: true },
    Estado: { type: DataTypes.STRING },
    Cartera: { type: DataTypes.STRING },
    RepresentanteLegal: { type: DataTypes.STRING },
    ControlLibranzas: { type: DataTypes.STRING },
    Cargo: { type: DataTypes.STRING },
    Telefono: { type: DataTypes.STRING },
    Correo: { type: DataTypes.STRING },
    OtroContacto: { type: DataTypes.STRING },
    Observaciones: { type: DataTypes.TEXT },
  });
};
