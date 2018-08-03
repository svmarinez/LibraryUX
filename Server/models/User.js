const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email is required"]
  },
  name: {
    type: String
  },
  password: {
    type: String,
    required: [true, "Your password is required"]
  },
  hasRole: [
    {
      superAdmin: { type: Boolean, default: false },
      admin: { type: Boolean, default: false },
      employee: { type: Boolean, default: true }
    }
  ],
  libraryName: {
    type: Schema.Types.ObjectId,
    ref: "Library"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
