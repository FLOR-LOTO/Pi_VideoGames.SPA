const getGamesByIdHandlers = require("../../handlers/games/getGamesByIdHandlers");

const getGamesById = async (req, res) => {
  try {
    const { id } = req.params;
    const games = await getGamesByIdHandlers(id);
    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getGamesById;
