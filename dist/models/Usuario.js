const {
  DataTypes
} = require("sequelize");
module.exports = sequelize => {
  return sequelize.define("Usuario", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    Contraseña: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Rol: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  });
};