const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const RegistroCargas = sequelize.define("RegistroCargas", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    FechaCarga: { type: DataTypes.DATE, allowNull: false },
    ArchivoCargado: { type: DataTypes.STRING(255), allowNull: false },
    EstadoCarga: { type: DataTypes.STRING(50), allowNull: false },
    Observaciones: { type: DataTypes.TEXT },
  });

  return RegistroCargas;
};
