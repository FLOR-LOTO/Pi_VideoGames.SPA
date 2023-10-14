const { User } = require("../../db");

const postUsersHandler = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });
  return user;
};

module.exports = postUsersHandler;
