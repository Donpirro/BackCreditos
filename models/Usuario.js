const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Usuario", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
