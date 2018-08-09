const express = require("express");
const formRoutes = express.Router();
const Form = require("../models/Form");

formRoutes.post("/new", (req, res) => {
  const { form, id } = req.body;
  form.forEach(element => {
    delete element.hidden;
  });
  console.log({ form });
  const newForm = new Form({
    form,
    libraryName:id,
    _author: req.user.id
  });
  console.log("entra");
  newForm
    .save()
    .then(form => {
      console.log(form);
      res.json({});
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = formRoutes;
