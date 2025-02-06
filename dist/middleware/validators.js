// validators.js
const {
  body,
  param,
  validationResult
} = require('express-validator');

// Validaciones para buscar empresa por NIT
const buscarEmpresaPorNITValidator = [param('nit').notEmpty().withMessage('El NIT es requerido.').isString().withMessage('El NIT debe ser una cadena de texto.').trim()];

// Validaciones para crear una empresa
const crearEmpresaValidator = [body('Empresa').notEmpty().withMessage('El nombre de la empresa es requerido.'), body('NitCorrecto').notEmpty().withMessage('El NIT es requerido.'), body('Estado').notEmpty().withMessage('El estado es requerido.')];

// Middleware para manejar errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
};
module.exports = {
  buscarEmpresaPorNITValidator,
  crearEmpresaValidator,
  handleValidationErrors
};