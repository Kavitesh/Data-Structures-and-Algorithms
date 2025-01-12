# Unique Paths Problem
[LeetCode](https://leetcode.com/problems/unique-paths/) 
|
[Solution](dp_62_Unique_Paths.js) 
| 
Dynamic Programming


The "Unique Paths" problem involves finding the number of unique paths from the top-left corner to the bottom-right corner of an `m x n` grid. You can only move either down or right at any point.

## Problem Description
Given two integers `m` and `n` representing the dimensions of a grid, determine how many unique paths exist to move from the top-left corner to the bottom-right corner.

### Constraints
- You can only move **down** or **right**.
- You cannot go out of the grid boundaries.

---

## Solution Explanation
The solution uses **Dynamic Programming** to compute the result efficiently. The idea is to build a 2D array `dp` where `dp[i][j]` represents the number of unique paths to cell `(i, j)`.

### Steps:
1. **Base Case**:
   - The first row (`dp[0][j]`) and the first column (`dp[i][0]`) are set to `1` since there's only one way to reach those cells (either move only right or only down).

2. **Recursive Relation**:
   - For any other cell `(i, j)`, the number of unique paths is the sum of the paths coming from the top cell `(i-1, j)` and the left cell `(i, j-1)`:
     ```
     dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
     ```

3. **Final Result**:
   - The value at the bottom-right corner `dp[m-1][n-1]` gives the total number of unique paths.

### Complexity:
- **Time Complexity**: \(O(m \times n)\)
- **Space Complexity**: \(O(m \times n)\)

---

## Code Implementation

```javascript
var uniquePaths = function(m, n) {
    // Create a 2D array to store the number of unique paths for each cell
    let dp = Array(m).fill().map(() => Array(n).fill(1));
    
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

console.log(uniquePaths(3, 7)); // Output: 28
```

---

## Example

### Input:
- Grid dimensions: `m = 3`, `n = 7`

### Output:
- Unique paths: `28`

### Explanation:
For a 3x7 grid, there are 28 unique ways to move from the top-left corner to the bottom-right corner by only moving down or right.

---

## Visualization
For a smaller grid (e.g., `m = 3, n = 3`):

```
Start -> [1] -> [1] -> [1]
         |       |       |
        [1] -> [2] -> [3]
         |       |       |
        [1] -> [3] -> [6] <- End
```

- Numbers inside the grid represent the cumulative number of unique paths to reach that cell.

---

## Other Implementations

### 1D Solution
The trick to reduce space complexity as each row of the dynamic programming (DP) table only depends on the current row and the row immediately above it.
Since the value at each dp[i][j] depends only on the value from the previous column in the same row (dp[i][j-1]) and the value from the same column in the previous row (dp[i-1][j]), you can update the dp array in-place without needing to store all rows of the grid.
```javascript
var uniquePaths = function(m, n) {
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

console.log(uniquePaths(3, 7)); // Output: 28
```

### Java Solution
```java
public class UniquePaths {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];

        // Initialize the first row and first column
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;

        // Fill the DP table
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }

    public static void main(String[] args) {
        UniquePaths up = new UniquePaths();
        System.out.println(up.uniquePaths(3, 7)); // Output: 28
    }
}
```
