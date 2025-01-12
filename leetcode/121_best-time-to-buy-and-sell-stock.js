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

function maxProfitSlidingWindow(prices) {
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

module.exports = { maxProfit, maxProfitSlidingWindow }
