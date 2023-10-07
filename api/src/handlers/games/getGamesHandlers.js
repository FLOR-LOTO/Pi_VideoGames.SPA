const { Videogame } = require("../../db"); //importo el modelo

const getGamesHandlers = async () => {
  const videoGames = await Videogame.findAll(); //obtiene todos los games
  res.json(videoGames); //obtiene un arreglo de objetos json
};

module.exports = getGamesHandlers;
