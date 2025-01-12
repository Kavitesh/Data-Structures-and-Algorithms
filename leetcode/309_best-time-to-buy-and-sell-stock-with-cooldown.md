# Best Time to Buy and Sell Stock with Cooldown

[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
|
[Solution](dp_309_best-time-to-buy-and-sell-stock-with-cooldown.js)
|
Dynamic Programming

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a **single transaction per day** (buying, selling, or cooldown). A **cooldown** means that after selling the stock on the `i-th` day, you cannot buy stock on the `i+1-th` day.

Return the maximum profit you can achieve.


### Constraints:
- `1 <= prices.length <= 5000`
- `0 <= prices[i] <= 1000`

---

## Explanation
This problem can be solved using **Dynamic Programming (DP)**. Before diving into the optimized DP solution, let's first understand a simpler solution using **Depth First Search (DFS)** with memoization.

### Simpler Solution: DFS with Memoization

The problem can be solved using **Depth-First Search (DFS)** with **Memoization** to avoid recomputing the same state multiple times. We define a recursive function to explore all possible actions at each day and state, storing intermediate results to optimize performance.

At Day 0, we have two options:
1. **Buy** the stock and start holding it.
2. **Cooldown** (do nothing, no stock).

After Day 0: Transitions Based on Actions
1. **If we bought the stock** (Hold):
   - On the next day, we can:
     - **Sell** the stock.
     - **Continue holding** (remain in the hold state).
2. **If we did nothing** (Cooldown):
   - On the next day, we can:
     - **Buy** the stock.
     - **Cooldown** (stay in the cooldown state).

### Base Case:

The base case is when `i >= n`, meaning there are no more days to process. At this point, the profit is `0`.


### Memoization:

To avoid recomputing the same state multiple times, we use a `Map` (or cache) to store results of previously computed states.

---

#### Code Implementation :
```javscript
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
```

### Complexity Analysis:
- **Time Complexity:** `O(n)` due to memoization.
- **Space Complexity:** `O(n)` for the recursion stack and memo table.

---

## Optimized Solution
Now, let's discuss the optimized **Dynamic Programming (DP)** solution. This approach reduces the space complexity to `O(1)` by using state variables.

### DP State Definitions
First we have to understand the decision of total profit can only be made on next day. If we sell today, then we wait till end of day to confirm decision. 

We use three states:
1. **Hold:** The maximum profit if you currently hold a stock. There is no difference if we buy now or have from last day.
2. **Sell:** The maximum profit if you just sold a stock. If we sell we must wait for one day so it is a saperate state. If we use dfs we dont need this extra state as we can just skip one day.
3. **Cooldown:** The maximum profit if you are in the cooldown state (i.e., neither bought nor sold today).

#### Transition Relations
1. **Hold:**
   ```
   hold[i] = max(hold[i-1], cooldown[i-1] - prices[i])
   ```
   - Continue holding the stock from the previous day. [Better to select hold on prev day]
   - Buy a stock today (subtract `prices[i]` from the previous cooldown state). [Better to select cooldown on prev day]

2. **Sell:**
   ```
   sell[i] = hold[i-1] + prices[i]
   ```
   - Sell the stock today and add the current price to the previous `hold` state. [Sell only posible if we hold on prev day]

3. **Cooldown:**
   ```
   cooldown[i] = max(cooldown[i-1], sell[i-1])
   ```
   - Stay in cooldown from the previous day. [Better to select cooldown on prev day]
   - Enter cooldown after selling a stock yesterday. [Better to select sell on prev day]

#### Base Cases
- `hold[0] = -prices[0]` (buy stock on the first day)
- `sell[0] = 0` (cannot sell on the first day)
- `cooldown[0] = 0` (no transaction on the first day)

---

### Optimized Code Implementation
```javscript
var maxProfit = function(prices) {
    const n = prices.length;
    
    if (n === 0) return 0;

    // Initial states for day 0
    let hold = -prices[0];  // Max profit if we hold the stock
    let sell = 0;           // Max profit if we sell (we can't sell on the first day)
    let cooldown = 0;       // Max profit if we cooldown (we do nothing)

    for (let i = 1; i < n; i++) {
        let prevHold = hold;
        let prevSell = sell;
        let prevCooldown = cooldown;

        hold = Math.max(prevHold, prevCooldown - prices[i]);  
        sell = prevHold + prices[i];
        cooldown = Math.max(prevCooldown, prevSell);
    }

    // The result is the maximum profit we can achieve by either selling or cooling down on the last day
    return Math.max(sell, cooldown);
};
```

### Explanation of the Code
1. **Initialization:**
   - Start with the base cases (`hold`, `sell`, `cooldown`).

2. **Iterate Over Days:**
   - Update the states `hold`, `sell`, and `cooldown` using the relations derived above.

3. **Result:**
   - The answer is the maximum of `sell` and `cooldown` on the last day since we cannot end with a `hold` state.

### Complexity Analysis
- **Time Complexity:** `O(n)`
  - Single loop over `prices`.
- **Space Complexity:** `O(1)`
  - Constant space used for `hold`, `sell`, and `cooldown`.

---

## Example

### Input:
```javascript
prices = [1, 2, 3, 0, 2]
```

### Output:
```javascript
3
```

### Explanation:
- Day 0: Buy (Profit = -1)
- Day 1: Hold (Profit = -1)
- Day 2: Sell (Profit = 2)
- Day 3: Cooldown (Profit = 2)
- Day 4: Buy and Sell (Profit = 3)

---

## Edge Cases
1. **Single Day:**
   - Input: `prices = [5]`
   - Output: `0`
   - Explanation: No transactions are possible.

2. **All Decreasing Prices:**
   - Input: `prices = [5, 4, 3, 2, 1]`
   - Output: `0`
   - Explanation: No profit can be made.

3. **All Increasing Prices:**
   - Input: `prices = [1, 2, 3, 4, 5]`
   - Output: `4`
   - Explanation: Buy on day 0 and sell on day 4.

---