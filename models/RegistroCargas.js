const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("RegistroCargas", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FechaCarga: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ArchivoCargado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EstadoCarga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Observaciones: DataTypes.TEXT,
  });
};
