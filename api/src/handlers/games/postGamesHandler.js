const { Videogame, Genre, User } = require("../../db");

const postGames = async (game, email) => {
  if (!email) throw new Error("Se necesita un email");

  const { name, description, released, image, rating, genres } = game;
  const newVideoGame = await Videogame.create({
    name,
    description,
    released,
    image,
    rating,
  });
  //si hay un genero asignado, busco dentro del array si coinciden
  const user = await User.findOne({
    where: {
      email,
    },
  });
  await newVideoGame.addUsers([user.dataValues.id]);

  if (genres.length) {
    const genresToLowerCase = genres.map((genre) => genre.toLowerCase());
    const genreInDb = await Promise.all(
      genresToLowerCase.map(
        async (genre) =>
          await Genre.findOne({
            where: {
              name: genre,
            },
          })
      )
    );
    const genresIds = genreInDb.map((genre) => genre.dataValues.id);

    await newVideoGame.addGenres(genresIds); //lo asocio al videogame , establezco la relacion
  }
  return await Videogame.findByPk(newVideoGame.dataValues.id, {
    //busca en la tabla
    include: [
      {
        model: Genre, // Incluye los datos del género.
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
      {
        model: User,
        attributes: ["id", "email", "name", "lastname"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = postGames;
