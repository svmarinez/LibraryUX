const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default:
      "http://casalector.fundaciongsr.org/wp-content/uploads/2017/09/puentes.jpg"
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
  admin: {
    type: Array,
    default: []
  },
  adminAnswers: {
    type: Array,
    default: []
  },
  employees: {
    type: Array,
    default: []
  },
  employeeAnswers: {
    type: Array,
    default: []
  }/* ,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  } */
});

LibrarySchema.index({
    location: "2dsphere"
  });
  
  
const Library = mongoose.model("Library", LibrarySchema);
module.exports = LibrarySchema;