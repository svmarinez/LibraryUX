const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new mongoose.Schema({
  answer1: {
    type: Number,
    default: 0
  },
  comment1: {
    type: String,
    default: null
  },
  answer2: {
    type: Number,
    default: 0
  },
  comment2: {
    type: String,
    default: null
  },
  answer3: {
    type: Number,
    default: 0
  },
  comment3: {
    type: String,
    default: null
  },
  answer4: {
    type: Number,
    default: 0
  },
  comment4: {
    type: String,
    default: null
  },
  answer5: {
    type: Number,
    default: 0
  },
  comment5: {
    type: String,
    default: null
  },
  answer6: {
    type: Number,
    default: 0
  },
  comment6: {
    type: String,
    default: null
  },
  answer7: {
    type: Number,
    default: 0
  },
  comment7: {
    type: String,
    default: null
  },
  answer8: {
    type: Number,
    default: 0
  },
  comment8: {
    type: String,
    default: null
  },
  answer9: {
    type: Number,
    default: 0
  },
  comment9: {
    type: String,
    default: null
  },
  answer10: {
    type: Number,
    default: 0
  },
  comment10: {
    type: String,
    default: null
  },
  answer11: {
    type: Number,
    default: 0
  },
  comment11: {
    type: String,
    default: null
  },
  answer12: {
    type: Number,
    default: 0
  },
  comment12: {
    type: String,
    default: null
  }
});
const Form = mongoose.model("Form", formSchema);
module.exports = formSchema;
