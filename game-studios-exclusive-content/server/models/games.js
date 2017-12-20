const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: String,
  slug: String,
  url: String,
  games: {
    title: String,
    year: Number,
    console: String,
    multiplayer: Boolean,
    rated: String
  }


})

module.exports = mongoose.model('Game', gameSchema);
