const { Videogame, Genre } = require ("../../db");
const { Op } = require('sequelize');

const postGames = async ( name, description, released, image, rating, genres ) => {
    try {
        const newVideoGame = await Videogame.create({
          name,
          description,
          released,
          image,
          rating,
          genres
        })
        //si hay un genero asignado, busco dentro del array si coinciden
        if (genres.length > 0) { 
            const genreInDb = await Genre.findAll({
              where: {
                name: {
                  [Op.in]: [genres], // Op.in busca en un array
                },
              },
            });
      
            await newVideoGame.addGenres(genreInDb); //lo asocio al videogame , establezco la relacion
          }
      } catch (error) {
        console.error(error); //solo usar en etapa de desarrollo
      }
}

module.exports = postGames;