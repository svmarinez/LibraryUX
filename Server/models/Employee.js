const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Your email is required']
  },
  name: {
    type: String,
    required: [true, 'Your name is required']
  },
  password: {
      type: String,
      required: [true, 'Your password is required']
  },
  answers: {
      type: Number, default: 0,
      required: [true, 'You must not leave these fields empty']
  }
});

const Sudo = mongoose.model('Sudo', sudoSchema);

module.exports = Sudo;