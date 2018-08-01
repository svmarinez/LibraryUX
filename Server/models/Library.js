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
    type: String,
    required: true
  },
  adminAnswers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Form"
    }
  ],
  employees: {
    type: Array,
    default: []
  },
  employeeAnswers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Form"
    }
  ], /* ,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  } */
});

/* LibrarySchema.index({
    location: "2dsphere"
  });
 */

const Library = mongoose.model("Library", librarySchema);
module.exports = librarySchema;
