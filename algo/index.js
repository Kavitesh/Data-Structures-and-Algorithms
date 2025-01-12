const run = () => {
  // Factorial 
  const { factorialIterative, factorialRecursive } = require("./factorial");
  console.log(factorialIterative(10));
  console.log(factorialRecursive(10));

  // Fibonacci
  const { fibonacciRecursive, fibonacciIterative, fibonacciMemoized } = require("./fibonacci");
  console.log(fibonacciRecursive(10));
  console.log(fibonacciIterative(100));
  console.log(fibonacciMemoized(100));
}


module.exports = { run, ...require('./factorial'), ...require('./fibonacci') }
