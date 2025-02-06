module.exports = (sequelize, DataTypes) => {
  const Prospectados = sequelize.define('Prospectados', {
    NumeroIdentificacion: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      field: 'NUMERO_IDENTIFICACION' // Asegúrate de que esto coincide con el nombre exacto en la base de datos
    },
    NombreCliente: {
      type: DataTypes.STRING(255),
      field: 'NOMBRE_CLIENTE'
    },
    LineaCreditoLI: {
      type: DataTypes.STRING(100),
      field: 'LINEA_CREDITO_LI'
    },
    MontoMaximoLI: {
      type: DataTypes.DECIMAL(15, 2),
      field: 'MONTO_MAXIMO_LI'
    },
    TasaEfectivaAnualLI: {
      type: DataTypes.DECIMAL(10, 2),
      field: 'TASA_EFECTIVA_ANUAL_LI'
    },
    TasaMesVencidaLI: {
      type: DataTypes.DECIMAL(10, 2),
      field: 'TASA_MES_VENCIDA_LI'
    },
    LineaCreditoCC: {
      type: DataTypes.STRING(100),
      field: 'LINEA_CREDITO_CC'
    },
    MontoMaximoCC: {
      type: DataTypes.DECIMAL(15, 2),
      field: 'MONTO_MAXIMO_CC'
    },
    TasaEfectivaAnualCC: {
      type: DataTypes.DECIMAL(10, 2),
      field: 'TASA_EFECTIVA_ANUAL_CC'
    },
    TasaMesVencidaCC: {
      type: DataTypes.DECIMAL(10, 2),
      field: 'TASA_MES_VENCIDA_CC'
    },
    NumeroIdentificacionEmpleador: {
      type: DataTypes.STRING(20),
      field: 'NUMERO_IDENTIFICACION_EMPLEADOR'
    },
    RazonSocialEmpleador: {
      type: DataTypes.STRING(255),
      field: 'RAZON_SOCIAL_EMPLEADOR'
    },
    CAT: {
      type: DataTypes.DECIMAL(10, 2),
      field: 'CAT'
    },
    Edad: {
      type: DataTypes.INTEGER,
      field: 'EDAD'
    },
    CicloVidaCrediticia: {
      type: DataTypes.STRING(100),
      field: 'ciclo_vida_crediticia'
    },
    Celular: {
      type: DataTypes.STRING(20),
      field: 'celular'
    },
    Telefono: {
      type: DataTypes.STRING(20),
      field: 'telefono'
    },
    Email: {
      type: DataTypes.STRING(255),
      field: 'email'
    }
  }, {
    timestamps: false,
    tableName: 'Prospectados'
  });
  return Prospectados;
};