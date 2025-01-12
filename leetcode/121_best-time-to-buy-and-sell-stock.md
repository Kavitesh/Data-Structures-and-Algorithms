# Best Time to Buy and Sell Stock - Solution Explanation

[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) 
|
[Solution](sw_121_best-time-to-buy-and-sell-stock.js)
|
Dynamic Programming

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve. If no profit is possible, return `0`.

## Approach

The solution uses a **greedy algorithm** to track:
1. The lowest price observed so far (`minPrice`).
2. The maximum profit that can be achieved up to the current day (`maxProfit`).

### Algorithm
1. Initialize `minPrice` to `Infinity` and `maxProfit` to `0`.
2. Iterate over each price in the array:
    - If the current price is less than `minPrice`, update `minPrice`.
    - Otherwise, calculate the profit by subtracting `minPrice` from the current price and update `maxProfit` if the calculated profit is greater.
3. Return `maxProfit`.

This approach ensures that we traverse the array only once, achieving an **O(n)** time complexity.

## Implementation

```javascript
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update the minimum price seen so far
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Calculate the profit
        }
    }

    return maxProfit;
}
```


## Sliding Window Approach
1. The "window" spans from the start to the current day (left to right pointers).
2. Expand the window by moving the right pointer.
3. Keep track of the minimum price within the window (prices[left]).
4. Calculate the profit by selling on the current day (prices[right] - prices[left]).
5. Update the maximum profit if this profit is larger.
6. Slide the window forward if prices[right] is less than prices[left] to reset the minimum price.

```javascript
function maxProfit(prices) {
    let left = 0; // min price pointer
    let maxProfit = 0;

    for (let right = 1; right < prices.length; right++) {
        if (prices[right] < prices[left]) {
            // Move the window's left pointer to right
            left = right;
        } else {
            // Calculate profit
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}

// Example Usage
const prices = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(prices)); // Output: 4
```
