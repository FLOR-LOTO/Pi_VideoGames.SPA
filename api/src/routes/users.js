const { Router } = require("express");
const login = require("../controllers/users/login");
const getAllUser = require("../controllers/users/getAllUsers");
const postUser = require("../controllers/users/postUsers");

const gamesRouter = Router();

gamesRouter.get("/", getAllUser);

gamesRouter.get("/login", login);

gamesRouter.post("/", postUser);

module.exports = gamesRouter;
