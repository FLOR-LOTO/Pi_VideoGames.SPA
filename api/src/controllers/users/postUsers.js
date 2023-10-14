const postUsersHandler = require("../../handlers/users/postUsersHandler");

const postUser = async (req, res) => {
  const { email, name, lastname, password } = req.body;
  try {
    const user = await postUsersHandler({ email, name, lastname, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;

/*cuando un usuario se registre, los datos se guardarán en la base de datos utilizando el modelo User y la función create.*/
