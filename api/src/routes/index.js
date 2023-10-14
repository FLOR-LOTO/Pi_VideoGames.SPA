const { Router } = require("express");
// Importar todos los routers;
const gamesRouter = require("./games.js");
const genresRouter = require("./genres.js");
const usersRouter = require("./users.js")

const router = Router();

// Configurar los routers
router.use("/game", gamesRouter);
router.use("/genre", genresRouter);
router.use("/user", usersRouter);

module.exports = router;
