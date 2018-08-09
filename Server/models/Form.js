const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  form: [
    {
      question: {
        type: String,
        enum: [
          "Name",
          "Address",
          "Contact Info",
          "Opening Hours",
          "Available Books",
          "Available Services",
          "Directions to Library",
          "Complaint Link",
          "Social Media Links",
          "Library Events",
          "Public Library System Events",
          "Link to Public Library System"
        ]
      },
        check: { type: Boolean, default: false},
        comment: String,
        value: { type: Number, enum: [1, 2, 3, 4, 5, 0], default: 0 }
      
    }
  ],
  libraryName: {
    type: Schema.Types.ObjectId,
    ref: "Library"
  },
  _author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
const Form = mongoose.model("Form", formSchema);
module.exports = Form;
