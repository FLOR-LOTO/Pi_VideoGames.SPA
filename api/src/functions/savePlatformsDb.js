const { Platform } = require("../db");
const axios = require("axios");
require("dotenv").config();

const { API_KEY } = process.env;

const savePlatformsDb = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );

    const { results } = data;

    // Crear un arreglo para almacenar las plataformas
    const platformData = [];

    results.forEach((game) => {
      game.platforms.forEach((platformObj) => {
        const slug = platformObj.platform.slug;
        const name = platformObj.platform.name;

        // Verificar que "slug" no sea nulo antes de guardarlo en la base de datos
        if (slug) {
          platformData.push({
            name: name,
            slug: slug,
          });
        }
      });
    });

    // Utilizar el modelo Platform para crear registros de plataformas en la base de datos
    await Platform.bulkCreate(platformData, {
      ignoreDuplicates: true,
    });

    console.log("Las plataformas se guardaron correctamente");
  } catch (error) {
    console.error("Error al guardar las plataformas:", error);
  }
};

module.exports = savePlatformsDb;
