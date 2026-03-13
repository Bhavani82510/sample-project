function getEvenNumbers(numbers) {
  return numbers.filter(function(num) {
    return num % 2 === 0;
  });
}
let nums = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(nums));