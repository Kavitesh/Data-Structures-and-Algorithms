// https://leetcode.com/problems/unique-paths/description/

// Simple Solution
var uniquePaths = function(m, n) {
    // Create a 2D array to store the number of unique paths for each cell
    let dp = Array.from({length: m},() => Array(n).fill(1));

    // Iterate through the grid starting from (1,1) to (m-1, n-1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // The number of unique paths to cell (i, j) is the sum of paths
            // from the cell above (i-1, j) and the cell to the left (i, j-1)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The bottom-right corner will hold the total number of unique paths
    return dp[m - 1][n - 1];
};

// Simple Solution
var uniquePaths1D = function(m, n) {
    // Use a 1D array to store the number of unique paths for each column
    let dp = Array(n).fill(1);

    // Iterate through the grid, row by row
    for (let i = 1; i < m; i++) {
        // Update the dp array for each row
        for (let j = 1; j < n; j++) {
            // Each dp[j] is the sum of dp[j] (current cell) and dp[j-1] (cell to the left)
            dp[j] += dp[j - 1];
        }
    }

    // The last element in the dp array will contain the total number of unique paths
    return dp[n - 1];
};


module.exports = { uniquePaths, uniquePaths1D }
