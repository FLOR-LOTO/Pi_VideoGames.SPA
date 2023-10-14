const { User } = require("../../db");

const postUsersHandler = async ({ name, lastname, email, password }) => {
  if (!name || !lastname || !email || !password)
    throw new Error("Faltan datos");

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      lastname,
      password,
    },
  });
  if (!created) throw new Error("El usuario ya existe");
  return user;
};

module.exports = postUsersHandler;
