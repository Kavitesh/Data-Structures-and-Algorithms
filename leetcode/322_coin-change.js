function coinChange(coins, amount) {
    const memo = new Map();

    function dfs(remaining) {
        if (remaining < 0) return Infinity; // Not a valid solution
        if (remaining === 0) return 0; // Base case: no coins needed
        if (memo.has(remaining)) return memo.get(remaining);

        let minCoins = Infinity;
        for (const coin of coins) {
            const result = dfs(remaining - coin);
            minCoins = Math.min(minCoins, result + 1);
        }

        memo.set(remaining, minCoins);
        return minCoins;
    }

    const result = dfs(amount);
    return result === Infinity ? -1 : result;
}

var coinChangeBottomUp = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity); // one extra column and initialize with Infinity no of coins
  dp[0] = 0 // extra column is 0 for saying no coin required to achieve 0 amount

  for (let coin of coins) {
    for (let j = 1; j <= amount; j++) {
      if (j - coin >= 0) {
        dp[j] = Math.min(dp[j], dp[j - coin] + 1) // same or remaining+1
      }
    }
  }

  return dp[amount] == Infinity ? -1 : dp[amount];
};