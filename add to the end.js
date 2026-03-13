function addFruit(fruitsArray, newFruit) {
  fruitsArray.push(newFruit);
  return fruitsArray;
}
let fruits = ["apple", "banana", "orange"];
let updatedFruits = addFruit(fruits, "mango");

console.log(updatedFruits);