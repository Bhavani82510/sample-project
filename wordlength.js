function filterLongWords(words, minLength) {
  return words.filter(function(word) {
    return word.length > minLength;
  });
}
let wordList = ["cat", "elephant", "dog", "giraffe", "lion"];
console.log(filterLongWords(wordList, 3));