const loginHandler = require("../../handlers/users/loginHandler");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await loginHandler(email, password);
    user
      ? res.status(200).json({ access: true, user })
      : res
          .status(403)
          .json({ error: "El usuario o la contraseña son incorrectos" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;

/*este código maneja la autenticación de usuarios. Cuando se llama a la función getUser, verifica si un usuario con el email y password proporcionados existe en la base de datos. Si existe, devuelve un mensaje de acceso válido; de lo contrario, informa que el usuario o la contraseña son incorrectos*/
