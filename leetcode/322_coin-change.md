# Coin Change Problem

[LeetCode](https://leetcode.com/problems/coin-change/)
|
[Solution](322_coin-change.js)
|
Dynamic Programming

The **Coin Change** problem is a classic problem where the goal is to determine the minimum number of coins needed to make up a given amount using a set of coin denominations.

## Problem Statement

Given an integer array `coins` representing different denominations of coins and an integer `amount` representing a total amount of money, return the fewest number of coins that make up the amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

### Constraints:
- You may assume that you have an infinite number of each coin.
- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

## Approach

### 1. Depth-First Search (DFS) Approach
The DFS approach explores all possible combinations of coins recursively to find the minimum number of coins required. Though not as efficient as dynamic programming, this method helps in understanding the problem intuitively.

### Steps:
1. Start with the target `amount` and iterate through each coin to explore the remaining amount.
2. Use recursion to find the minimum coins for the remaining amount.
3. Use memoization to store results for previously computed amounts, avoiding redundant calculations.

### Code Example
```javascript
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

// Example usage:
const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount)); // Output: 3 (5 + 5 + 1)
```

### Complexity Analysis
#### Time Complexity:
- Without memoization: **O(coins.length^amount)** (exponential growth)
- With memoization: **O(coins.length * amount)**

#### Space Complexity:
- Recursive call stack and memoization storage: **O(amount)**

### 2. Dynamic Programming (DP) Approach
The DP approach builds an array `dp` where `dp[i]` represents the minimum number of coins needed to make up the amount `i`.

#### Steps:
1. Initialize a `dp` array of size `amount + 1` and fill it with a large value (e.g., `Infinity`) to represent that the amount is initially unreachable.
2. Set `dp[0] = 0` since no coins are needed to make up the amount `0`.
3. Iterate through each amount from `1` to `amount`, and for each amount, iterate through each coin denomination:
   - If the coin value is less than or equal to the current amount, update `dp[amount]` as:
     ```
     dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1)
     ```
   This ensures we are taking the minimum number of coins needed to make up that amount.
4. Finally, if `dp[amount]` is still `Infinity`, return `-1` (indicating the amount is not possible to achieve); otherwise, return `dp[amount]`.

#### Code Example
```javascript
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage:
const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount)); // Output: 3 (5 + 5 + 1)
```

### Complexity Analysis
#### Time Complexity:
- **Outer Loop:** Iterates over all amounts from `1` to `amount`.
- **Inner Loop:** Iterates over all coin denominations.
- Overall: **O(amount \* coins.length)**

#### Space Complexity:
- The `dp` array requires **O(amount)** space.
- Total: **O(amount)**

## Edge Cases
1. **No Coins:**
   ```javascript
   coinChange([], 5); // Output: -1
   ```
2. **Zero Amount:**
   ```javascript
   coinChange([1, 2, 5], 0); // Output: 0
   ```
3. **Unreachable Amount:**
   ```javascript
   coinChange([2], 3); // Output: -1
   ```

## Explanation of Example
For `coins = [1, 2, 5]` and `amount = 11`:

1. Start with `dp = [0, Infinity, Infinity, ..., Infinity]`.
2. Fill `dp` iteratively:
   - For `amount = 1`: Use `1` coin of denomination `1`.
   - For `amount = 2`: Use `1` coin of denomination `2`.
   - For `amount = 3`: Use `1` coin of denomination `2` and `1` coin of denomination `1`.
   - Continue until `amount = 11`.
3. Result is `dp[11] = 3`.

This dynamic programming approach ensures we calculate the optimal solution for every subproblem, building up to the final answer.

