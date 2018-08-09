const express = require("express");
const passport = require("passport");
const libRoutes = express.Router();
const User = require("../models/User");
const Library = require("../models/Library");
const Form = require("../models/Form");



// Retreive and Create the Library  ||  CRud

libRoutes.get("/list", (req, res) => {
  Library.find().then(libraries => {
    res.json(libraries);
  });
});

libRoutes.post("/new", (req, res) => {
  const { name, country, province, city, location } = req.body.library;

  Library.findOne({ name }, "name", (err, user, next) => {
    const newLibrary = new Library({
      name,
      country,
      province,
      city,
      location
    });
    newLibrary
      .save()
      .then(library => {
         console.log(library)
        res.json(library);
      })
      .catch(err => {
        res.json(err);
      });
  });
});

libRoutes.get("/:id", (req, res) => {
    Form.find({libraryName:req.params.id})
    .populate("libraryName")
    .then(formsLibrary => res.json(formsLibrary))
    .catch(err => res.json(err));
  });

module.exports = libRoutes;
