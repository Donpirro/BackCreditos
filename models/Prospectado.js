const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Prospectado", {
    NumeroIdentificacion: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    NombreCliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LineaCreditoLI: DataTypes.STRING,
    MontoMaximoLI: DataTypes.DECIMAL(15, 2),
    TasaEfectivaAnualLI: DataTypes.DECIMAL(10, 2),
    TasaMesVencidaLI: DataTypes.DECIMAL(10, 2),
    LineaCreditoCC: DataTypes.STRING,
    MontoMaximoCC: DataTypes.DECIMAL(15, 2),
    NitEmpAct: DataTypes.STRING,
  });
};
