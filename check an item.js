function hasFruit(fruitsArray, fruitName) {
  return fruitsArray.includes(fruitName);
}
let fruits = ["banana", "orange", "mango"];
let hasOrange = hasFruit(fruits, "orange");
let hasApple = hasFruit(fruits, "apple");

console.log(hasOrange);
console.log(hasApple);  