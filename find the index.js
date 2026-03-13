function findFruitIndex(fruitsArray, fruitName) {
  return fruitsArray.indexOf(fruitName);
}
let fruits = ["banana", "orange", "mango"];
let index = findFruitIndex(fruits, "orange");

console.log(index);