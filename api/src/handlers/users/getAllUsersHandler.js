const { User } = require("../../db");

const getAllUsersHandler = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = getAllUsersHandler;
