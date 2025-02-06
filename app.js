const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./src/config/database");

// Importar rutas
const adminRoutes = require("./src/routes/AdminRoutes");
const vendedorRoutes = require("./src/routes/VendedorRoutes");
const empresaRoutes = require("./src/routes/EmpresaRoutes");
const prospectadosRoutes = require("./src/routes/ProspectadosRoutes");
const carteraRoutes = require("./src/routes/CarteraRoutes");
const usuarioRoutes = require("./src/routes/UsuarioRoutes");
const registroCargasRoutes = require("./src/routes/RegistroCargasRoutes");
const consultaRoutes = require("./src/routes/consultaRoutes");
const reporteRoutes = require("./src/routes/ReporteRoutes");

const app = express();

// 🔹 Configurar CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 🔹 Middlewares para JSON y formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Registrar Rutas
app.use("/api/admin", adminRoutes);
app.use("/api/vendedor", vendedorRoutes);
app.use("/api/empresa", empresaRoutes);
app.use("/api/prospectado", prospectadosRoutes);
app.use("/api/cartera", carteraRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/registro-cargas", registroCargasRoutes);
app.use("/api/consultas", consultaRoutes);
app.use("/api/reporte", reporteRoutes);

console.log("✅ Rutas registradas correctamente");

// 🔹 Iniciar servidor y sincronizar base de datos
sequelize.sync()
  .then(() => {
    console.log("📌 Base de datos sincronizada.");
    app.listen(5000, () => {
      console.log("🚀 Servidor corriendo en http://localhost:5000");
    });
  })
  .catch(error => {
    console.error("❌ Error al sincronizar la base de datos:", error);
  });
