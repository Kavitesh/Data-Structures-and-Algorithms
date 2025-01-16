const factorialIterative = n => {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
}

const factorialRecursive = n => {
  if (n < 2) {
    return 1;
  }
  return n * factorialRecursive(n - 1)
}

module.exports = { factorialIterative, factorialRecursive }

if (require.main === module) { 
  console.log(factorialIterative(10));
  console.log(factorialRecursive(10));
}