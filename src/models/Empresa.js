module.exports = (sequelize, DataTypes) => {
  console.log("Definiendo el modelo Empresa...");  // Log para confirmar que se está creando el modelo
  const Empresa = sequelize.define('Empresa', {
    AcuerdoNo: DataTypes.STRING,
    Empresa: DataTypes.STRING,
    NitCorrecto: {
      type: DataTypes.STRING(20),
      primaryKey: true
    },
    Estado: DataTypes.STRING,
    Cartera: DataTypes.STRING,
    RepresentanteLegal: DataTypes.STRING,
    ControlLibranzas: DataTypes.STRING,
    Cargo: DataTypes.STRING,
    Telefono: DataTypes.STRING,
    Correo: DataTypes.STRING,
    OtroContacto: DataTypes.STRING,
    Observaciones: DataTypes.TEXT
  }, {
    timestamps: false,
    tableName: 'empresas' // Nombre exacto de la tabla
  });

  console.log("Modelo Empresa definido con éxito"); // Confirma que el modelo se ha definido correctamente

  return Empresa;
};
