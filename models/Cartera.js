const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Cartera", {
    NumeroCredito: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    MontoDesembolsado: DataTypes.DECIMAL(15, 2),
    TipoIdentificacion: DataTypes.STRING,
    NumeroDocumentoTitular: DataTypes.STRING,
    NombreTitular: DataTypes.STRING,
    SaldoCapital: DataTypes.DECIMAL(15, 2),
    DiasMora: DataTypes.INTEGER,
    FechaUltAbono: DataTypes.DATE,
    NitEmpAct: DataTypes.STRING,
  });
};