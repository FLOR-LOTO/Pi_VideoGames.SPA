const { Genre } = require("../../db");
const { Op } = require("sequelize");

const getGenresHandler = async (name) => {
  if(!name) return await Genre.findAll();
  const dbGenres = await Genre.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return dbGenres;
};

module.exports = getGenresHandler;
