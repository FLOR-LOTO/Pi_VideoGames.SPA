const axios = require("axios");
const { Genre } = require("../db");
require("dotenv").config();

const { API_KEY } = process.env;

const saveGenresDb = async () => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  const { results } = data;


  await Promise.all(
    results.map(async (genre) => {
      await Genre.create({ name: genre.name.toLowerCase() });
    })
  );
  console.log("Los generos fueron creados correctamente");
};

module.exports = saveGenresDb;
