const { Router } = require("express");
const getGenres = require("../controllers/genres/getGenres");

const genresRouter = Router();

genresRouter.get("/", getGenres);

module.exports = genresRouter;
