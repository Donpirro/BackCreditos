module.exports = (sequelize, DataTypes) => {
  const Reporte = sequelize.define('Reporte', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UsuarioID: {
      // Asegúrate de que coincide con la relación en index.js
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'reportes',
    timestamps: false
  });
  return Reporte;
};