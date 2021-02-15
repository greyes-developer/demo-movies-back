const { response } = require("express");

const Movie = require("../models/Movie");

const createMovie = async (req, res = response) => {
  const { imdbID } = req.body;

  try {
    let movie = await Movie.findOne({ imdbID });

    if (movie) {
      return res.status(400).json({
        success: false,
        data: {
          mgs: "Does exist movie with this ID",
        },
      });
    }

    movie = new Movie(req.body);

    await movie.save();

    return res.json({
      success: true,
      data: {
        imdbID: movie.imdbID,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {
        msg: "Movie dont created",
      },
    });
  }
};

const deleteMovie = async (req, res = response) => {
  const imdbID = req.params.imdbID;
  const { uid } = req.body;

  try {
    const movie = await Movie.find({ imdbID });

    if (!movie) {
      return res.status(404).json({
        success: false,
        data: {
          msg: "Movie doesnt exist",
        },
      });
    }

    if (movie[0].uid == uid) {
      await Movie.findOneAndDelete({ imdbID });
      return res.json({
        success: true,
        data: {
          msg: "Movie deleted",
        },
      });
    } else {
      return res.status(401).json({
        success: false,
        data: {
          msg: "Dont have rights for delete this movie",
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {
        msg: "Error for delete movie",
      },
    });
  }
};

const getMovies = async (req, res = response) => {
  const uid = Number.parseInt(req.params.uid);

  try {
    const movies = await Movie.find({ uid });

    return res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    return res.json({
      success: false,
      data: {
        msg: "Get movies failed",
      },
    });
  }
};

const deleteMovies = async (req, res = response) => {
  const uid = Number.parseInt(req.params.uid);

  try {
    const moviesDeleted = await Movie.deleteMany({ uid });

    return res.json({
      success: true,
      data: {
        msg: "Delete  movies success",
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      data: {
        msg: "Delete movies failed",
      },
    });
  }
};

module.exports = {
  createMovie,
  deleteMovie,
  getMovies,
  deleteMovies,
};
