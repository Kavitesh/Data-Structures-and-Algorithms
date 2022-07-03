// Factorial 
const { factorialIterative, factorialRecursive } = require("./factorial");
console.log(factorialIterative(10));
console.log(factorialRecursive(10));

// Fibonacci
const { fibonacciRecursive, fibonacciIterative, fibonacciMemoized } = require("./fibonacci");
console.log(fibonacciRecursive(10));
console.log(fibonacciIterative(100));
console.log(fibonacciMemoized(100));

// Sorting
const { numbers, bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } = require("./sorting");
console.log(bubbleSort(numbers()));
console.log(selectionSort(numbers()));
console.log(insertionSort(numbers()));
console.log(mergeSort(numbers()));
console.log(quickSort(numbers()));
