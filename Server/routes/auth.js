const express = require("express");
const passport = require("passport");
const authRoutes = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 20;


// USER LOGIN

authRoutes.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

authRoutes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    badRequestMessage: "Error",
    failureFlash: true,
    passReqToCallback: true
  })
);

//USER SIGNUP || CRud

authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

authRoutes.post("/signup", (req, res, next) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (email === "" || password === "") {
    res.render("auth/signup", {
      message: "Indicate email and password"
    });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (email !== null) {
      res.render("auth/signup", { message: "User already exists" });
      return;
    }

    const newUser = new User({
      email,
      password: hashPass
    });

    newUser.save(err => {
      if (err) {
        res.render("auth/signup", { message: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  });

//UPDATE USER  ||  crUd

authRoutes.get("/edit/:id", (req, res) => {
    User.findById(req.params.id).then(user => {
      res.render("user/edit", { user });
    });
  });
  
  authRoutes.post("/edit/:id", (req, res) => {
    const { email, password, name, hasRole } = req.body;
    /* const location = { type: "Point", coordinates: [req.body.lat, req.body.lng] }; */
    
    User.findByIdAndUpdate(req.params.id, {
      email,
      password,
      name,
      hasRole
    })
      .then(() => {
        res.redirect("/user/:id");
      })
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/user/edit");
      });
  });

// DELETE USER  ||  cruD
authRoutes.get("/delete/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/user/:id");
      });
  });

//LOGOUT

  authRoutes.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
});

module.exports = authRoutes;
