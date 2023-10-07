const { Videogame, Genre, Platform } = require("../../db");

const getGamesById = async (id) => {
  const videoGame = await Videogame.findByPk(id, { //busca en la tabla
    include: [
      {
        model: Genre, // Incluye los datos del género.
        attributes: ["name"],
      },
      {
        model: Platform, // Incluye los datos de la plataforma.
        attributes: ["name"],
      },
    ],
  });
  if (videoGame) {
    // Si se encuentra en la base de datos devolvemos el json
    res.json(videoGame);
  } else {
    // Si no se encuentra en la base de datos, intentamos buscarlo en la API
    const videoGameApi = await findVideoGameApi(id);
    if (videoGameApi) {
      // Si se encuentra en la api devolvemos el json
      res.json(videoGame);
    } else {
      res.status(404).json({ error: "Video game not found" }); // Si no se encuentra en ninguna
    }
  }
};

module.exports = getGamesById;

/* GET | /videogames/:idVideogame
Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. */
