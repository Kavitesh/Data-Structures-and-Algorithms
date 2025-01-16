# Coin Change 2 Problem

[LeetCode](https://leetcode.com/problems/coin-change-ii/)
|
[Solution](518_coin-change-ii.js)
|
Dynamic Programming

The **Coin Change 2** problem is a variation of the coin change problem. Here, the goal is to determine the number of different ways to make up a given amount using a set of coin denominations.

## Problem Statement

Given an integer array `coins` representing different denominations of coins and an integer `amount` representing a total amount of money, return the number of combinations that make up the amount. If the amount cannot be achieved, return `0`.

### Constraints:
- You may assume that you have an infinite number of each coin.
- `1 <= coins.length <= 300`
- `1 <= coins[i] <= 5000`
- `0 <= amount <= 5000`

## Approach

### 1. Depth-First Search (DFS) with Memoization
This approach uses recursion to explore all possible combinations of coins that make up the given amount. Memoization is used to avoid redundant calculations and improve efficiency.

### Steps:
1. Start with the target `amount` and iterate through each coin to explore all combinations.
2. Use recursion to find the number of ways to make up the remaining amount.
3. Use a memoization table to store results for previously computed states.

### Code Example
```javascript
function change(amount, coins) {
    const memo = new Map();

    function dfs(index, remaining) {
        if (remaining === 0) return 1; // Found a valid combination
        if (remaining < 0 || index === coins.length) return 0; // Invalid case

        const key = `${index}-${remaining}`;
        if (memo.has(key)) return memo.get(key);

        // Include the current coin or skip it
        const include = dfs(index, remaining - coins[index]);
        const exclude = dfs(index + 1, remaining);

        memo.set(key, include + exclude);
        return include + exclude;
    }

    return dfs(0, amount);
}

// Example usage:
const coins = [1, 2, 5];
const amount = 5;
console.log(change(amount, coins)); // Output: 4
```

### Complexity Analysis
#### Time Complexity:
- Without memoization: **O(2^(coins.length \* amount))** (exponential growth)
- With memoization: **O(coins.length \* amount)**

#### Space Complexity:
- Recursive call stack and memoization storage: **O(coins.length \* amount)**

### 2. Dynamic Programming (DP) Approach
The DP approach uses a 1D array `dp` where `dp[i]` represents the number of combinations to make up the amount `i`.

#### Steps:
1. Initialize a `dp` array of size `amount + 1` with `dp[0] = 1` (base case: one way to make amount `0`).
2. For each coin, update the `dp` array for all amounts from the coin value to the target amount:
   ```
   dp[j] += dp[j - coin]
   ```
   This ensures that the combinations are counted correctly.
3. Return `dp[amount]` as the result.

#### Code Example
```javascript
function change(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // Base case

    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
}

// Example usage:
const coins = [1, 2, 5];
const amount = 5;
console.log(change(amount, coins)); // Output: 4
```

### Complexity Analysis
#### Time Complexity:
- **Outer Loop:** Iterates over all coins.
- **Inner Loop:** Iterates over amounts from `coin` to `amount`.
- Overall: **O(coins.length \* amount)**

#### Space Complexity:
- The `dp` array requires **O(amount)** space.
- Total: **O(amount)**

## Edge Cases
1. **No Coins:**
   ```javascript
   change(5, []); // Output: 0
   ```
2. **Zero Amount:**
   ```javascript
   change(0, [1, 2, 5]); // Output: 1
   ```
3. **Unreachable Amount:**
   ```javascript
   change(3, [2]); // Output: 0
   ```

## Explanation of Example
For `coins = [1, 2, 5]` and `amount = 5`:

1. Start with `dp = [1, 0, 0, 0, 0, 0]`.
2. For `coin = 1`: Update `dp` for amounts from `1` to `5`.
3. For `coin = 2`: Update `dp` for amounts from `2` to `5`.
4. For `coin = 5`: Update `dp` for amount `5`.
5. Result is `dp[5] = 4`.


