var dictionary = {};
var newWord = function(word, definition) {
  dictionary[word] = definition;
}
var search = function(word) {
  if(dictionary[word] === undefined) {
    return null;
  } else {
    return dictionary[word];

    }
  }

module.exports = {
  newWord,
  search
}
