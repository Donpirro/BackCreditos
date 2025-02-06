const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    dialectOptions: {
      ...config.dialectOptions,
      decimalNumbers: true, // Para manejar correctamente los campos DECIMAL
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false
  }
);

const db = {
  sequelize,
  Sequelize,
  Usuario: require('./Usuario')(sequelize, Sequelize.DataTypes),
  Empresa: require('./Empresa')(sequelize, Sequelize.DataTypes),
  Cartera: require('./Cartera')(sequelize, Sequelize.DataTypes),
  Prospectados: require('./Prospectado')(sequelize, Sequelize.DataTypes),
  Consulta: require('./Consulta')(sequelize, Sequelize.DataTypes),
  Reporte: require('./Reporte')(sequelize, Sequelize.DataTypes),
  RegistroCargas: require('./RegistroCargas')(sequelize, Sequelize.DataTypes)
};

// Relaciones principales
db.Usuario.hasMany(db.Consulta, { foreignKey: "UsuarioID", onDelete: "CASCADE" });
db.Consulta.belongsTo(db.Usuario, { foreignKey: "UsuarioID" });

db.Empresa.hasMany(db.Cartera, { 
  foreignKey: "NitEmpAct",
  sourceKey: "NitCorrecto",
  as: "Carteras" // ✔️ Alias consistente
});
db.Cartera.belongsTo(db.Empresa, { 
  foreignKey: "NitEmpAct",
  targetKey: "NitCorrecto"
});

db.Empresa.hasMany(db.Prospectados, {
  foreignKey: "NUMERO_IDENTIFICACION_EMPLEADOR",
  sourceKey: "NitCorrecto",
  as: "Prospectados" // ✔️ Alias consistente
});
db.Prospectados.belongsTo(db.Empresa, {
  foreignKey: "NUMERO_IDENTIFICACION_EMPLEADOR",
  targetKey: "NitCorrecto"
});

db.Usuario.hasMany(db.Reporte, { foreignKey: "UsuarioID", onDelete: "CASCADE" });
db.Reporte.belongsTo(db.Usuario, { foreignKey: "UsuarioID" });

db.Usuario.hasMany(db.RegistroCargas, { foreignKey: "UsuarioID", onDelete: "CASCADE" });
db.RegistroCargas.belongsTo(db.Usuario, { foreignKey: "UsuarioID" });

// Verificación de conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos establecida'))
  .catch(err => console.error('❌ Error de conexión a la base de datos:', err));

module.exports = db;