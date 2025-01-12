function maxProfit(prices) {
    let left = 0; // min price pointer
    let maxProfit = 0;
    for (let right = 1; right < prices.length; right++) {
        if (prices[right] < prices[left]) {
            // Move the window's left pointer to right
            left = right;
        } else { // no need to calculate maxProfit when moving right
            // Calculate profit
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
}

var maxProfitCool = function(prices) {
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

function maxSubArray(nums) {
    let currentSum = 0;  // Tracks the current subarray sum
    let maxSum = nums[0]; // Stores the maximum sum found so far

    for (let num of nums) {
        // Restart the subarray if the current sum is too small
        currentSum = Math.max(num, currentSum + num);
        // Update the maximum sum
        if(currentSum > maxSum){
          maxSum = currentSum;
        }
    }

    return maxSum;
}


module.exports = () => {
  //https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  console.log(maxProfit([1, 2, 3, 0, 2])); // 2
  
  //https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
  //  h  s  c
  // -3  0  0 |3 
  // -2 -1  0 |2
  // -2  4  0 |6
  // -2  3  4 |5
  //  4 -2  4 |0
  //  4  7  4 |3
  console.log(maxProfitCool([3, 2, 6, 5, 0, 3])); //7

  // https://leetcode.com/problems/maximum-subarray/
  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6
};