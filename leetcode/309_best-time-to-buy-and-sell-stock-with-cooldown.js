var maxProfit = function(prices) {
  const n = prices.length;
  const memo = new Map();

  // Helper function using DFS and memoization
  const dfs = (i, hold) => {
      if (i >= n) return 0;  // Base case: No days left

      // Memoization key
      const key = `${i}-${hold}`;
      if (memo.has(key)) return memo.get(key);

      let result = 0;

      if (hold) {
          // Case 1: We hold the stock, so we can either sell or cooldown
          result = Math.max(
              prices[i] + dfs(i + 2, 0),  // Sell the stock (cooldown for 1 day)
              dfs(i + 1, 1)                // Cooldown (stay holding)
          );
      } else {
          // Case 2: We don't hold the stock, so we can either buy or cooldown
          result = Math.max(
              -prices[i] + dfs(i + 1, 1),  // Buy the stock
              dfs(i + 1, 0)                // Cooldown (stay without stock)
          );
      }

      // Store the result in memo
      memo.set(key, result);

      return result;
  };

  return dfs(0, 0);  // Start DFS with day 0 and not holding any stock
};

var maxProfitOptimized = function(prices) {
    const n = prices.length;

    if (n === 0) return 0;

    // Initial states for day 0
    let hold = -prices[0];  // Max profit if we hold the stock on day 0
    let sell = 0;           // Max profit if we sell on day 0 (we can't sell on the first day)
    let cooldown = 0;       // Max profit if we cooldown on day 0 (we do nothing)

    for (let i = 1; i < n; i++) {
        let prevHold = hold;
        let prevSell = sell;
        let prevCooldown = cooldown;

        // Update states for day i
        hold = Math.max(prevHold, prevCooldown - prices[i]);
        sell = prevHold + prices[i];
        cooldown = Math.max(prevCooldown, prevSell);
    }

    // The result is the maximum profit we can achieve by either selling or cooling down on the last day
    return Math.max(sell, cooldown);
};

module.exports = { maxProfit, maxProfitOptimized };