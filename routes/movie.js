const { Router } = require("express");

const { createMovie, deleteMovie, getMovies } = require("../controllers/movie");

const router = Router();

router.post("/new-movie", createMovie);

router.delete("/:imdbID", deleteMovie);

router.get("/movies/:uid", getMovies);

module.exports = router;
