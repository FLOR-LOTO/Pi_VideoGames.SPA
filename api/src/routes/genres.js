const { Router } = require("express");
const getGenres = require("../controllers/genres/getGenres");

const genresRouter = Router();

//que es lo que quiero hace con cada router

genresRouter.get("/", getGenres);

module.exports = genresRouter;
