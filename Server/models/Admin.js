const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email is required"]
  },
  name: {
    type: String,
    required: [true, "Your name is required"]
  },
  password: {
    type: String,
    required: [true, "Your password is required"]
  },
  image: {
    type: String,
    default:
      "http://casalector.fundaciongsr.org/wp-content/uploads/2017/09/puentes.jpg"
  },
  employees: {
    type: Array,
    default: []
  },
  answers: {
    type: Array,
    default: [],
    required: [true, "You must not leave these fields empty"]
  },
  employeeAnswers: {
    type: Array,
    default: []
  },
  location: { 
    type: { 
      type: String }, 
      coordinates: [Number] }
});

const Sudo = mongoose.model("Sudo", sudoSchema);

module.exports = Sudo;
