const postGamesHandler = require("../../handlers/games/postGamesHandler");

const postGames = async (req, res) => {
  try {
    const { name, description, released, image, rating, genres } = req.body;
    const games = await postGamesHandler(
      name,
      description,
      released,
      image,
      rating,
      genres
    );
    res.status(200).json(games);
  } catch (error) {
    console.error(error); //solo usar en etapa de desarrollo
    res.status(500).json({ error: error.message });
  }
};

module.exports = postGames;

/* POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno)*/
