const getAllUsersHandler = require("../../handlers/users/getAllUsersHandler");

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersHandler();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUsers;

/* se encarga de recuperar todos los usuarios almacenados en la base de datos y responder con una lista de usuarios en formato JSON cuando se llama a la función getAllUsers. Esto puede ser útil, por ejemplo, para obtener una lista de todos los usuarios registrados*/