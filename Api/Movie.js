const express = require("express");

const mongoose = require("mongoose");

const Movie = require("../Db/movieList");

const route = express.Router();

route.post("/", async (req, res) => {
  const { name, img, summary } = req.body;
  let movie = {};
  movie.name = name;
  movie.img = img;
  movie.summary = summary;
  let movieModel = new Movie(movie);
  await movieModel.save();

  res.json(movieModel);
});

route.get("/movies", (req, res) => {
  Movie.find({})
    .then((movie) => {
      res.send(movie);
    })
    .catch((e) => {
      res.send(e);
    });
});

route.get("/movies/search", (req, res, next) => {
  const searchField = req.query.name;
  Movie.find({ name: { $regex: searchField, $options: "$i" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;
