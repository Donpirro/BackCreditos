module.exports = (sequelize, DataTypes) => {
  const Consulta = sequelize.define('Consulta', {
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EmpresaNIT: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Resultado: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Consulta',
    timestamps: false
  });

  Consulta.associate = (models) => {
    Consulta.belongsTo(models.Usuario, {
      foreignKey: 'UsuarioID',
      targetKey: 'ID'
    });
  };

  return Consulta;
};