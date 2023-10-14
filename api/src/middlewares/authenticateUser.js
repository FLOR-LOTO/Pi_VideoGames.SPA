// const getUsersHandler = require("../handlers/users/loginHandler")


// const authenticateUser = async (req, res, next) => {
//     const { email, password } = req.query;
//     try {
//       const user = await getUsersHandler(email, password);
//       if (user) {
//         req.user = user; // Almacena la información del usuario en req.user
//         next(); // Continúa con la siguiente función en la ruta
//       } else {
//         res.status(401).json({ error: "La autenticación ha fallado" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   module.exports = authenticateUser;