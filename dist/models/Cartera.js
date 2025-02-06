module.exports = (sequelize, DataTypes) => {
  const Cartera = sequelize.define('Cartera', {
    NumeroCredito: {
      type: DataTypes.STRING(50),
      field: 'Número de crédito',
      primaryKey: true
    },
    MontoDesembolsado: {
      type: DataTypes.DECIMAL(15, 2),
      field: 'Monto desembolsado'
    },
    TipoIdentificacion: {
      type: DataTypes.STRING(50),
      field: 'Tipo de identificación'
    },
    NumeroDocumentoTitular: {
      type: DataTypes.STRING(20),
      field: 'Número Doc. de identidad del titular'
    },
    NombreTitular: {
      type: DataTypes.STRING(255),
      field: 'Nombre del titular'
    },
    SaldoCapital: {
      type: DataTypes.DECIMAL(15, 2),
      field: 'Saldo a capital'
    },
    DiasMora: {
      type: DataTypes.INTEGER,
      field: 'Número de días de mora'
    },
    FechaUltAbono: {
      type: DataTypes.DATE,
      field: 'Fecha Ult Abono'
    },
    NitEmpAct: {
      type: DataTypes.STRING(20),
      references: {
        model: 'Empresa',
        key: 'NitCorrecto'
      }
    }
  }, {
    timestamps: false,
    tableName: 'cartera'
  });
  return Cartera;
};