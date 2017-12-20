const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exclusiveListSchema = new Schema({
  name: 'Naughty Dog',
  slug:'naughty-dog',
  url:'...'
  games: {
    title:'The Last of Us',
    year: 2013,
    console: 'PlayStation 3',
    multiplayer: true,
    rated: 'M for Mature',

    title: "Uncharted: Drake's Fortune",
    year: 2007,
    console: 'PlayStation 3',
    multiplayer: false
    rated: 'T for Teen',

    title: "Uncharted 2: Among Thieves",
    year: 2009,
    console: 'PlayStation 3',
    multiplayer: true,
    rated: 'T for Teen',

    title: "Uncharted 3: Drake's Deception",
    year: 2011,
    console: 'PlayStation 3',
    multiplayer: true,
    rated: 'T for Teen',

    title: "Uncharted 4: A Thief's End",
    year: 2016,
    console: 'PlayStation 4',
    multiplayer: true,
    rated: 'T for Teen',


  }

})

module.exports = mongoose.model('ExclusiveList', exclusiveListSchema);
