# Longest Common Subsequence (LCS)
[LeetCode](https://leetcode.com/problems/longest-common-subsequence/) 
|
[Solution](1143_longest-common-subsequence.js)
|
Dynamic Programming

## Problem Statement
The **Longest Common Subsequence** problem is a classic dynamic programming problem. Given two strings `text1` and `text2`, the task is to find the length of the longest subsequence that is common to both strings. A subsequence is a sequence derived from another string by deleting some or no characters without changing the order of the remaining characters.

### Example
#### Input:
```plaintext
text1 = "abcde"
text2 = "ace"
```
#### Output:
```plaintext
3
```
#### Explanation:
The longest common subsequence is `"ace"`, and its length is `3`.

---

## Approach
We solve this problem using **Dynamic Programming (DP)**. The idea is to break the problem into smaller subproblems and build the solution iteratively.

### Dynamic Programming Formulation
We define a 2D array `dp` where:
- `dp[i][j]` represents the length of the LCS of the first `i` characters of `text1` and the first `j` characters of `text2`.

#### Transition Rules
1. **If characters match:**
   - If `text1[i-1] === text2[j-1]`, then `dp[i][j] = dp[i-1][j-1] + 1`.
2. **If characters don't match:**
   - If `text1[i-1] !== text2[j-1]`, then `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])`.

#### Base Case
- `dp[0][j] = 0` for all `j`, because an empty string has no common subsequence.
- `dp[i][0] = 0` for all `i`, for the same reason.

---

## Solutions

### Solution 1: Using a 2D Array
This solution uses a 2D DP table to store intermediate results.

#### Code
```javascript
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
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
```

#### Complexity
- **Time Complexity:** `O(m * n)`
- **Space Complexity:** `O(m * n)`

---

### Solution 2: Space-Optimized DP
Instead of using a full 2D array, we can reduce the space complexity to `O(min(m, n))` by keeping only two 1D arrays (previous and current rows).

#### Code
```javascript
var longestCommonSubsequence = function (text1, text2) {
    if (text1.length < text2.length) {
        [text1, text2] = [text2, text1]; // Ensure text1 is longer
    }

    const prev = Array(text2.length + 1).fill(0);
    let curr = Array(text2.length + 1).fill(0);

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = prev[j - 1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        [prev, curr] = [curr, prev]; // Swap arrays for the next iteration
    }

    return prev[text2.length];
};
```

#### Complexity
- **Time Complexity:** `O(m * n)`
- **Space Complexity:** `O(min(m, n))`

---

## Example Walkthrough
### Input:
```plaintext
text1 = "abcde"
text2 = "ace"
```

### DP Table for 2D Array Solution:
|   |   | a | c | e |
|---|---|---|---|---|
|   | 0 | 0 | 0 | 0 |
| a | 0 | 1 | 1 | 1 |
| b | 0 | 1 | 1 | 1 |
| c | 0 | 1 | 2 | 2 |
| d | 0 | 1 | 2 | 2 |
| e | 0 | 1 | 2 | 3 |

The value at `dp[5][3]` is `3`, which is the length of the LCS.

---

## Applications
- Bioinformatics (e.g., DNA sequence alignment)
- Spell checkers and diff tools
- Data comparison and version control systems (e.g., Git)

---

