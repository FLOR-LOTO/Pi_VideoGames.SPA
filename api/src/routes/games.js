const { Router } = require("express");
const getGames = require("../controllers/games/getGames");
const getGamesById = require("../controllers/games/getGamesById");
const postGames = require("../controllers/games/postGames");

const gamesRouter = Router();

gamesRouter.get("/", getGames);

gamesRouter.get("/:id", getGamesById);

gamesRouter.post("/", postGames);

module.exports = gamesRouter;
