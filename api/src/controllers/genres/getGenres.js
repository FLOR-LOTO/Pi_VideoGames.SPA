const getGenresHandler = require("../../handlers/genres/getGenresHandler");

const getGenres = async (req, res) => {
  try {
    const { name } = req.query;
    const genres = await getGenresHandler(name);
    res.status(200).json(genres);
  } catch (error) {
    console.error(error); //solo usar en etapa de desarrollo
    res.status(500).json({ error: error.message });
  }
};

module.exports = getGenres;
