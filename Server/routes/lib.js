const express = require("express");
const passport = require("passport");
const libRoutes = express.Router();
const multer = require("multer");
const User = require("../models/User");
const Library = require("../models/Library");

// Retreive and Create the Library  ||  CRud

libRoutes.get("/lib/list", (req, res) => {
    if (User.hasRole == "Admin" || User.hasRole == "SuperAdmin"){
        Library.find().then(Libraries => {
            res.render("lib/list", { libraries });
          });
    }
})

libRoutes.get("/lib/new", (req, res, next) => {
  if (User.hasRole == "Admin" || User.hasRole == "SuperAdmin") {
    res.render("lib/new");
  }
});

libRoutes.post("/lib/new", (req, res, next) => {
  if (User.hasRole == "Admin" || User.hasRole == "SuperAdmin") {
    const { name, country, province, city } = req.body;
    const admin = req.user.id;
    // const image = `/uploads/${req.file.filename}`;
    /* const location = {
      type: "Point",
      coordinates: [req.body.lat, req.body.lng]
    } ;*/
    if (
      name === "" ||
      country === "" ||
      province === "" ||
      city === "" ||
      admin === "" ||
      image === "" /* ||
      location === "" */
    ) {
      res.render("lib/new", {
        message: "Please fill all the required fields"
      });
      return;
    }
    Library.findOne({ name }, "name", (err, user, next) => {
        const newLibrary = new Library({
          name,
          country,
          province,
          city,
          admin,
          image/* ,
          location */
        });
        newLibrary
          .save()
          .then(() => {
            res.redirect("/lib/list");
          })
          .catch(err => {
            req.flash("error", err.message);
            res.redirect("/lib/new");
          });
      });

  }
});

module.exports = libRoutes;