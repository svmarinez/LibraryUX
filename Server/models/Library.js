const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Form"
    }
  ],
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

const Library = mongoose.model("Library", librarySchema);
module.exports = Library;
