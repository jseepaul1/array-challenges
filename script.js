// // Write a function that is given an array and each time the value is "food" it should console log "yummy".
// // If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
  var isFoodFound = false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      isFoodFound = true;
    }
  }

  if (isFoodFound === false) {
    console.log("I'm hungry");
  }
}
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);
// alwaysHungry([4, "apple", 3.5, "food"]);

// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
  var avg = 0;
  for (var i = 0; i < arr.length; i++) avg += arr[i];
  var avg = avg / arr.length;

  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);

// Write a function that will reverse the values an array and return them.
function reverse(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  arr = newArr;
  return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

// Fibonacci Array
function fibonacciArray(n) {
  var fibArr = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr;
}

var result = fibonacciArray(10);
// console.log(result);
