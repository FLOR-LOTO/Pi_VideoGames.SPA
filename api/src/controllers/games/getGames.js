const getGamesHandler = require("../../handlers/games/getGamesHandler");

const getGames = async (req, res) => {
  try {
    const { name } = req.query;
    const games = await getGamesHandler(name);
    res.status(200).json(games);
  } catch (error) {
    console.error(error); //solo usar en etapa de desarrollo
    res.status(500).json({ error: error.message });
  }
};

module.exports = getGames;
