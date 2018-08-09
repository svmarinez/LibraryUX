const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get('/', (req, res) => {
    const id = req.user.id;
    User.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
})

module.exports = router;