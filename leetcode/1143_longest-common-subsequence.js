var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0)); 

    for (let i = 1; i <= m; i++) { // not < as we have extra 0 row
        for (let j = 1; j <= n; j++) { 
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};

var longestCommonSubsequence1D = function (text1, text2) {
    if (text1.length < text2.length) {
        [text1, text2] = [text2, text1]; // Ensure text1 is longer
    }

    let prev = Array(text2.length + 1).fill(0);
    let curr = Array(text2.length + 1).fill(0);

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = prev[j - 1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        [prev, curr] = [curr, prev]; // Swap arrays for the next iteration better then prev = curr
    }

    return prev[text2.length];
};

module.exports = {longestCommonSubsequence , longestCommonSubsequence1D}