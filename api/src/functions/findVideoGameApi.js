const axios = require('axios');
require ("dotenv").config();

const { API_KEY } = process.env

const findVideoGameApi = async (id) => {
  try {
    //solicitud GET a la API externa para obtener el videojuego por su ID
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

    if (response.data) {
      return response.data; // Devolver el objeto del videojuego desde la API
    } else {
      return null; // Devolver null si no se encontró el videojuego en la API
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al buscar el videojuego en la API');
  }
};

module.exports = findVideoGameApi;