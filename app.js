const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database"); // Conexión a la base de datos
const adminRoutes = require("./routes/adminRoutes"); // Rutas de administrador
const vendedorRoutes = require("./routes/vendedorRoutes"); // Rutas de vendedor
const empresaRoutes = require("./routes/EmpresaRoutes"); // Rutas de empresas
const prospectadosRoutes = require("./routes/ProspectadosRoutes"); // Rutas de prospectados
const carteraRoutes = require("./routes/CarteraRoutes"); // Rutas de cartera
const usuarioRoutes = require("./routes/UsuarioRoutes"); // Rutas de usuarios
const registroCargasRoutes = require("./routes/RegistroCargasRoutes"); // Rutas de registro de cargas

const app = express();

// Middlewares
app.use(bodyParser.json()); // Procesar JSON en solicitudes
app.use(bodyParser.urlencoded({ extended: true })); // Procesar datos en formularios
app.use(express.json()); // Manejo de datos JSON directamente

// Rutas
app.use("/api/admin", adminRoutes); // Rutas específicas para el administrador
app.use("/api/vendedor", vendedorRoutes); // Rutas específicas para los vendedores
app.use("/api/empresa", empresaRoutes); // Rutas para manejar empresas
app.use("/api/prospectados", prospectadosRoutes); // Rutas para manejar prospectados
app.use("/api/cartera", carteraRoutes); // Rutas para manejar cartera
app.use("/api/usuario", usuarioRoutes); // Rutas para manejar usuarios
app.use("/api/registro-cargas", registroCargasRoutes); // Rutas para registro de cargas

// Sincronizar base de datos y levantar el servidor
sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada.");
    app.listen(3000, () => {
      console.log("Servidor ejecutándose en el puerto 3000.");
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
