const { Router } = require("express");

const {
  createMovie,
  deleteMovie,
  getMovies,
  deleteMovies,
} = require("../controllers/movie");

const router = Router();

router.post("/new-movie", createMovie);

router.delete("/:imdbID", deleteMovie);

router.get("/movies/:uid", getMovies);

router.delete("/delete-movies/:uid", deleteMovies);

module.exports = router;
