var uniquePaths = function(m, n) {
  const dp = Array(n).fill(1); // one row and column for storing 1 posible path as same line

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
};


var longestCommonSubsequence = function(text1, text2) {
  let prev = Array(text2.length + 1).fill(0); // one extra row and col with 0s for avoiding array index issues.  
  let curr = Array(text2.length + 1).fill(0);

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) { // when there was a match in prev chars follow that route and increment 
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]); // No match means we skip one char for either text1(bottom) or text2(left)
      }
    }

    [prev, curr] = [curr, prev]; // Swap arrays for the next iteration better then prev = curr
  }

  return prev[text2.length];
};

var coinChange = function(coins, amount) {
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

var coinChange2 = function(coins, amount) {
  const dp = Array(amount + 1).fill(0); // one extra column and initialize with 0 ways 
  dp[0] = 1 // extra column is 1 for saying one way to achieve 0 amount

  for (let coin of coins) {
    for (let j = coin; j <= amount; j++) { // we start from coin to skip 
      dp[j] += dp[j - coin]
    }
  }

  return dp[amount];
};


if (require.main === module) { 
  //https://leetcode.com/problems/unique-paths/
  // [ 1, 1, 1,  1,  1,  1,  1]
  // [ 1, 2, 3,  4,  5,  6,  7]
  // [ 1, 3, 6, 10, 15, 21, 28]
  console.log( uniquePaths(3, 7)); // 28

  // https://leetcode.com/problems/longest-common-subsequence/
  // | 0, 0, 0, 0 | 
  // [ 0, 1, 1, 1 ] a (j-1)
  // [ 0, 1, 1, 1 ] b
  // [ 0, 1, 2, 2 ] c
  // [ 0, 1, 2, 2 ] d
  // [ 0, 1, 2, 3 ] e
  //      a  c  e(i-1)
 console.log( longestCommonSubsequence("abcde","ace")); //3

  //https://leetcode.com/problems/coin-change/
  // |#,#,#,#,#,#,#,#,#,#, #, #| 
  // [0,1,2,3,4,5,6,7,8,9,10,11] 1
  // [0,1,1,2,2,3,3,4,4,5, 5, 6] 2
  // [0,1,1,2,2,1,2,2,3,3, 2, 3] 5
  //  0,1,2,3,4,5,6,7,8,9,10,11
  console.log(coinChange([1, 2, 5],11)); // 3 (5 + 5 + 1)

  //https://leetcode.com/problems/coin-change-ii
  // | 0, 0, 0, 0, 0, 0 |
  // [ 1, 1, 1, 1, 1, 1 ] 1
  // [ 1, 1, 2, 2, 3, 3 ] 2
  // [ 1, 1, 2, 2, 3, 4 ] 5
  //   0  1  2  3  4  5
  console.log( coinChange2([1, 2, 5], 5)); //4
};