const mongoose = require("mongoose");
Admin = require('./Admin.js');
AdminSchema = mongoose.model('Admin').schema;

const sudoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email is required"]
  },
  password: {
    type: String,
    required: [true, "Your password is required"]
  },
  name: {
    type: String,
    required: [true, "Your name is required"]
  },
  image: {
    type: String,
    default:
      "http://casalector.fundaciongsr.org/wp-content/uploads/2017/09/puentes.jpg"
  },
  admins: {
    type: Array,
    default: []
  }
});

const Sudo = mongoose.model("Sudo", sudoSchema);

module.exports = Sudo;
