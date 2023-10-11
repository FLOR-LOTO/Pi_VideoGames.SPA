const { Videogame } = require("../../db"); //importo el modelo
const { Op } = require("sequelize");
const axios = require("axios");
require("dotenv").config();

const { API_KEY } = process.env;

//busqueda en la base de datos  ---> me devuelve un array vacio ??
const getGamesHandlers = async (name) => {
  const dbVideoGames = await Videogame.findAll({
    where: {
      //filtro la busqueda
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
  const { results } = data;

  const apiVideoGames = results.map((game)=>{
    return {
      name: game.name,
      description: "",
      image: game.background_image,
      released: game.released,
      rating: game.rating_top, 
    }
  })
  const allVideoGames = [...dbVideoGames, ...apiVideoGames]
  return allVideoGames.slice(0,15);
};

module.exports = getGamesHandlers;

/* GET | /videogames/name?="..."
Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos. 

filter a la api en array, hace la busqueda en la db, lo junto en un array, meter un slice para que solo me traiga 15*/
