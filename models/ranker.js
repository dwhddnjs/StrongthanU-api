const pkg = require("mongoose");

const { model, Schema } = pkg;

const rankerSchema = new Schema({
  nickname: String,
  gender: String,
  body: Number,
  squat: Number,
  bench: Number,
  dead: Number,
});

module.exports = model("ranker", rankerSchema);
