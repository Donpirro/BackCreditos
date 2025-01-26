const checkRole = (roles) => {
    return (req, res, next) => {
      try {
        const userRole = req.user.Rol; // Suponiendo que el rol del usuario viene en `req.user`
        if (!roles.includes(userRole)) {
          return res.status(403).json({ message: "Acceso denegado" });
        }
        next();
      } catch (error) {
        res.status(500).json({ message: "Error al verificar el rol" });
      }
    };
  };
  
  module.exports = { checkRole };
  