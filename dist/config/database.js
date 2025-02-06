const {
  Sequelize
} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('creditoscomfa', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});
sequelize.authenticate().then(() => console.log('Conexión a la base de datos establecida con éxito.')).catch(err => console.error('Error al conectar a la base de datos:', err));
module.exports = sequelize;