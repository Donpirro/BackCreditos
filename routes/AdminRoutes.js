const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");  // Asegúrate de que este archivo exista
const vendedorController = require("../controllers/vendedorController");  // Asegúrate de que este archivo exista
const { verifyToken } = require("../middleware/authMiddleware");  // Asegúrate de que este archivo exista
const { checkRole } = require("../middleware/roleMiddleware");  // Asegúrate de que este archivo exista
const multer = require("multer");

// Configuración de multer para la carga de archivos
const upload = multer({ dest: "uploads/" });

// Rutas para el administrador
router.post(
  "/upload/empresa",
  verifyToken,
  checkRole(["admin"]),
  upload.single("file"),
  adminController.uploadEmpresa
);

router.post(
  "/upload/cartera",
  verifyToken,
  checkRole(["admin"]),
  upload.single("file"),
  adminController.uploadCartera
);

router.post(
  "/upload/prospectados",
  verifyToken,
  checkRole(["admin"]),
  upload.single("file"),
  adminController.uploadProspectados
);

// Rutas para el vendedor
router.get(
  "/consulta/:nit",
  verifyToken,
  checkRole(["vendedor"]),
  vendedorController.getDataByNIT
);

module.exports = router;
