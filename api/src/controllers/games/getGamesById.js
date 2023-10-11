const getGamesByIdHandler = require("../../handlers/games/getGamesByIdHandler");

const getGamesById = async (req, res) => {
  try {
    const { id } = req.params;
    const games = await getGamesByIdHandler(id);
    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getGamesById;
