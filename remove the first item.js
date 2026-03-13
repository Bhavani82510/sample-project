function removeFirstItem(fruitsArray) {
  fruitsArray.shift(); 
  return fruitsArray;
}
let fruits = ["apple", "banana", "orange", "mango"];
let updatedFruits = removeFirstItem(fruits);

console.log(updatedFruits);