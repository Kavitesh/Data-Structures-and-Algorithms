const fibonacciRecursive = n => { //O(2^n)  
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const fibonacciIterative = n => { //O(n) 
  if (n < 2) {
    return n
  }
  let f0 = 0;
  let f1 = 1;
  let f;
  for (let i = 2; i < n; i++) {
    f = f0 + f1;
    f0 = f1;
    f1 = f;
  }
  return f0+f1;
}

const fibonacciMemoization = () => { //O(n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

module.exports = { fibonacciRecursive, fibonacciIterative, fibonacciMemoized: fibonacciMemoization() }

if (require.main === module) { 
  console.log(fibonacciRecursive(10));
  console.log(fibonacciIterative(100));
  console.log(fibonacciMemoized(100));
}