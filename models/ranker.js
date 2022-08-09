import pkg from 'mongoose';

const { model, Schema } = pkg;

const rankerSchema = new Schema({
  nickname: String,
  gender: String,
  body: Number,
  squat: Number,
  bench: Number,
  dead: Number,
});

export default model('ranker', rankerSchema);
